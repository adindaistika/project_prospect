import { IconCalendarEvent } from "@tabler/icons-react";
import { IconClockHour4 } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import Link from "next/link";

const Task = () => {
    return (
        <main className="min-h-screen">
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left font-semibold">TASK</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo" />
                </div>
            </header>
            <Link href={"/task/add"}>
                <button className="bg-sky-600 p-3 rounded-md shadow-md text-xs text-white" onClick={() => window.location.href = 'task/add'}> + Add Task </button>
            </Link>
            <section className="text-sky-600">
                <h2 className="text-sky-600 my-3 font-semibold">Task terupdate</h2>
                <div className="flex gap-3 justify-center flex-wrap">
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-md w-80 p-3">
                        <div className="flex justify-between text-white">
                            <p className="bg-sky-600 p-2 rounded-md text-xs">1 minute ago</p>
                            <p className="bg-green-700 p-2 rounded-md text-xs">Finish</p>
                        </div>
                        <p className="font-bold my-3">Lorem, ipsum dolor.</p>
                        <div className="flex justify-between items-end">
                            <div className="opacity-40">
                                <div className="flex gap-2 text-xs items-center">
                                    <IconCalendarEvent />
                                    <p>23 Mei 2023</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <IconClockHour4 />
                                    <p>04.00</p>
                                </div>
                            </div>
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
            </section>
        </main>
    );
};

export default Task;
