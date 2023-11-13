import { IconTrash } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import ModalEvents from "@/components/modal/modalEvents";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteEventById,getEvent,} from "../../../store/reducers/events/events.action";
import ModalEditEvents from "@/components/modal/modalEditEvents";

export default function Events() {
    const [dateState, setDateState] = useState(new Date());
    const DynamicCalendar = dynamic(() => import("react-calendar"), {
        ssr: false,
    });
    const dispatch = useDispatch();
    const { data_event } = useSelector((state) => state.event);

    const changeDate = () => { };

    const tileClassName = () => { };

    const handleDelete = async (id) => {
        const konfirmasi = confirm("Are you sure?");

        if (konfirmasi) {
            dispatch(deleteEventById({ id }));
            dispatch(getEvent());
        }
    };

    useEffect(() => {
        dispatch(getEvent());
    }, []);

    return (
        <main className=" min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="calendar rounded-md">
                    <DynamicCalendar
                        tileClassName={({ activeStartDate, date, view }) =>
                            tileClassName(date)
                        }
                        onChange={changeDate}
                        value={dateState}
                        next2Label={""}
                        nextLabel={">"}
                        prevLabel={"<"}
                        prev2Label={""}
                    />
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center text-primary">
                        <h5 className="font-bold">Your Event</h5>
                        <button
                            className="text-xs text-primary font-bold"
                            onClick={() => document.getElementById("modalevents").showModal()}
                        >
                            + Add Events
                        </button>
                        <ModalEvents />
                    </div>
                    <p className="opacity-50">30 Januari 2023</p>
                    <div className="space-y-3">
                        {data_event.map((item, i) => (
                            <div
                                key={i}
                                className="shadow-md rounded-md p-3 flex justify-between items-center"
                            >
                                <div>
                                    <h5 className="font-bold text-[10px] md:text-[18px]">
                                        {item.meeting_type}
                                    </h5>
                                    <p className="text-xs">{item.start_date}</p>
                                </div>
                                <div className="flex items-center cursor-pointer gap-2">
                                    <div
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-transparent p-1 w-max"
                                    >
                                        <IconTrash color="red" />
                                    </div>
                                    <div
                                        onClick={() =>
                                            document.getElementById(`modalEditEvents_${item.id}`).showModal()   }
                                        className="bg-transparent p-1 w-max"
                                    >
                                        <IconPencilMinus color="green" />
                                    </div>
                                </div>
                                <ModalEditEvents id={item.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export async function getServerSideProps() {
    return {
        props: { title: "EVENTS" },
    };
}