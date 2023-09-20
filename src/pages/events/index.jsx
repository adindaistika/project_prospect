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
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-primary font text-lg">Events</h1>
                <div className="flex gap-3 items-center">
                    <p>Agust 23,2023 4.30 PM</p>
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
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
                        <div className="flex justify-between items-center shadow-md px-3 py-2 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-2">
                                <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-3 py-2 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-2">
                                <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-3 py-2 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-2">
                                <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-3 py-2 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-2">
                                <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center shadow-md px-3 py-2 rounded-md">
                            <p className="font-bold">Meeting seminar</p>
                            <div className="space-x-2">
                                <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
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
