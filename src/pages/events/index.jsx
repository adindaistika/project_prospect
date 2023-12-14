import { IconTrash } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import ModalEvents from "@/components/modal/modalEvents";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEventById,
  getEvent,
} from "../../../store/reducers/events/events.action";
import ModalEditEvents from "@/components/modal/modalEditEvents";
import { IconClipboardText } from "@tabler/icons-react";
import { useRouter } from "next/router";
import OverlayLoading from "@/components/OverlayLoading";

export default function Events() {
  const router = useRouter();
  const [dateState, setDateState] = useState(new Date());
  const DynamicCalendar = dynamic(() => import("react-calendar"), {
    ssr: false,
  });
  const dispatch = useDispatch();
  const [busy, set_busy] = useState(false);
  const { data_event } = useSelector((state) => state.event);

  const changeDate = () => {};

  const tileClassName = () => {};

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Are you sure?");

    if (konfirmasi) {
      dispatch(deleteEventById({ id }));
      dispatch(getEvent());
    }
  };

  useEffect(() => {
    set_busy(true);
    dispatch(getEvent());
    set_busy(false);
  }, []);

  return (
    <>
      {!busy ? (
        <main className="min-h-screen">
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
            <div className="w-full shadow-md rounded-md bg-white">
              <div className="flex justify-between px-3 pt-3 items-center text-primary">
                <h5 className="font-bold text-black text-xl">Event</h5>
                <button
                  className="text-primary"
                  onClick={() =>
                    document.getElementById("modalevents").showModal()
                  }
                >
                  + Add Events
                </button>
                <ModalEvents />
              </div>
              <p className="pl-3 pb-3 border-b-2 opacity-50">30 Januari 2023</p>
              <div className="space-y-3">
                {data_event.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 border-b-2 border-slate-50 flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-bold text-[10px] md:text-[18px]">
                        {item.title}
                      </h5>
                      <p className="text-xs">{item.start_date}</p>
                    </div>
                    <div className="flex items-center cursor-pointer gap-2">
                      <div
                        onClick={() => router.push(`/events/${item.id}`)}
                        className="text-black"
                      >
                        <IconClipboardText width={20} />
                      </div>
                      <div
                        onClick={() => handleDelete(item.id)}
                        className="bg-transparent p-1 w-max"
                      >
                        <IconTrash color="red" />
                      </div>
                      <div
                        onClick={() =>
                          document
                            .getElementById(`modalEditEvents_${item.id}`)
                            .showModal()
                        }
                        className="bg-transparent p-1 w-max"
                      >
                        <IconPencilMinus color="green" />
                      </div>
                    </div>
                    <ModalEditEvents id={item.id} data={item} />
                  </div>
                ))}
                {(busy || data_event.length < 0) && (
                  <div className="w-full h-full grid place-items-center">
                    <h5 className="mt-7 flex items-center gap-3 font-semibold">
                      <span className="loading loading-spinner loading-lg"></span>{" "}
                      Data sedang kosong...
                    </h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <OverlayLoading />
      )}
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "EVENTS" },
  };
}
