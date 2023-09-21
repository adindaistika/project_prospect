import { IconTrash } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const Events = () => {
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
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left font-semibold">EVENTS</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo" />
                </div>
            </header>
            <div className="flex gap-5">
                <div className="calendar bg-slate-400 rounded-md">
                    <DynamicCalendar tileClassName={({ activeStartDate, date, view }) => tileClassName(date)} onChange={changeDate} value={dateState} next2Label={''} nextLabel={'>'} prevLabel={'<'} prev2Label={''} />
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center text-primary">
                        <h5 className="font-bold">Your Event</h5>
                        <Link href={"/events/add"}>+ Add Event</Link>
                    </div>
                    <p className="opacity-50">30 Januari 2023</p>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center shadow-md px-4 py-4 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-1 flex items-center gap-2">
                                <div className="text-red-600">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-4 py-4 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-1 flex items-center gap-2">
                                <div className="text-red-600">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-4 py-4 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-1 flex items-center gap-2">
                                <div className="text-red-600">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-4 py-4 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-1 flex items-center gap-2">
                                <div className="text-red-600">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-4 py-4 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-1 flex items-center gap-2">
                                <div className="text-red-600">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Events;
