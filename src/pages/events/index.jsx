import { IconTrash } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import ModalEvents from "@/components/modal/modalEvents";
import { useState } from "react";


export default function Events() {
    const [dateState, setDateState] = useState(new Date());
    const DynamicCalendar = dynamic(() => import('react-calendar'), {
        ssr: false,
    })

    const changeDate = () => {

    }

    const tileClassName = () => {

    }
    return (
        <main className=" min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="calendar rounded-md">
                    <DynamicCalendar tileClassName={({ activeStartDate, date, view }) => tileClassName(date)} onChange={changeDate} value={dateState} next2Label={''} nextLabel={'>'} prevLabel={'<'} prev2Label={''} />
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
                        <div className="shadow-md rounded-md p-3 flex justify-between items-center">
                            <div>
                                <h5 className="font-bold text-[10px] md:text-[18px]">
                                    Meeting Seminar
                                </h5>
                                <p className="text-xs">28 Agustus 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-transparent p-1 w-max">
                                    <IconTrash color="red" />
                                </div>
                                <div className="bg-transparent p-1 w-max">
                                    <IconPencilMinus color="green" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md rounded-md p-3 flex justify-between items-center">
                            <div>
                                <h5 className="font-bold text-[10px] md:text-[18px]">
                                    Meeting Seminar
                                </h5>
                                <p className="text-xs">28 Agustus 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-transparent p-1 w-max">
                                    <IconTrash color="red" />
                                </div>
                                <div className="bg-transparent p-1 w-max">
                                    <IconPencilMinus color="green" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md rounded-md p-3 flex justify-between items-center">
                            <div>
                                <h5 className="font-bold text-[10px] md:text-[18px]">
                                    Meeting Seminar
                                </h5>
                                <p className="text-xs">28 Agustus 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-transparent p-1 w-max">
                                    <IconTrash color="red" />
                                </div>
                                <div className="bg-transparent p-1 w-max">
                                    <IconPencilMinus color="green" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md rounded-md p-3 flex justify-between items-center">
                            <div>
                                <h5 className="font-bold text-[10px] md:text-[18px]">
                                    Meeting Seminar
                                </h5>
                                <p className="text-xs">28 Agustus 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-transparent p-1 w-max">
                                    <IconTrash color="red" />
                                </div>
                                <div className="bg-transparent p-1 w-max">
                                    <IconPencilMinus color="green" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md rounded-md p-3 flex justify-between items-center">
                            <div>
                                <h5 className="font-bold text-[10px] md:text-[18px]">
                                    Meeting Seminar
                                </h5>
                                <p className="text-xs">28 Agustus 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-transparent p-1 w-max">
                                    <IconTrash color="red" />
                                </div>
                                <div className="bg-transparent p-1 w-max">
                                    <IconPencilMinus color="green" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export async function getServerSideProps() {
    return {
        props: { title: 'EVENTS' },
    };
}