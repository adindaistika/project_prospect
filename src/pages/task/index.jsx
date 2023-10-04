import { IconCalendarEvent } from "@tabler/icons-react";
import { IconClockHour4 } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import {IconClipboardText} from "@tabler/icons-react";
import ModalTask from "@/components/modal/modalTask";

export default function Task() {
    return (
        <main className="min-h-screen">
            <button
                className="bg-sky-600 p-3 rounded-md shadow-md text-xs text-white font-regular"
                onClick={() => document.getElementById("modal-task").showModal()}
            >
                Add Task
            </button>
            <ModalTask />
            <section className="text-sky-800">
                <h2 className="text-sky-800 my-3 font-semibold">Task terupdate</h2>
                <div className="flex gap-3 flex-wrap">
                    <div className="shadow-2xl rounded-md w-64 p-3">
                        <div className="flex justify-between text-sky-900">
                            <p className="bg-blue-300 p-2 rounded-md text-xs font-regular">1 minute ago</p>
                        </div>
                        <p className="font-bold my-3">Rapat Varash App</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center text-slate-600">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center text-slate-600">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-black">
                                    <IconClipboardText width={20} />
                                </div>
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export async function getServerSideProps(){
    return{
        props: {title:'TASK'}
    }
}
