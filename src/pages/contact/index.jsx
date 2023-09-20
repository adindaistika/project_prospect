import { IconSearch } from "@tabler/icons-react";
import { IconFileSpreadsheet } from "@tabler/icons-react";
import { IconDatabaseExport } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";
import { IconQrcode } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconMessage2 } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";

const Contact = () => {
    return (
        <main className="min-h-screen">
            <header className="flex flex-col-reverse sm:flex-row justify-between items-center mb-4">
                <h1 className="text-primary font text-lg">Contact</h1>
                <div className="flex gap-3 items-center mb-2 sm:mb-0">
                    <p>Agust 23,2023 4.30 PM</p>
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
                </div>
            </header>
            <div className="flex w-full mx-auto my-4 p-2 rounded-md shadow-md">
                <input className="outline-none w-full" type="text" name="search" id="search" />
                <IconSearch />
            </div>
            <div className="flex items-center sm:flex-row items-center gap-5">
                <div className="flex gap-3 w-full">
                    <div className="max-w-[90px] text-center flex flex-col items-center text-xs">
                        <IconMessage2 onClick={()=>window.location.href='massmessage'} color="#0B588D" />
                        <p>Mass Message</p>
                    </div>

                    <div className="max-w-[90px] text-center flex flex-col items-center text-xs">
                        <IconFileSpreadsheet color="#0B588D" />
                        <p>Import From Excel</p>
                    </div>
                    <div className="max-w-[90px] text-center flex flex-col items-center text-xs">
                        <IconDatabaseExport color="#0B588D" />
                        <p>Export Contact</p>
                    </div>
                    <div className="max-w-[70px] text-centerflex flex-col items-center text-xs">
                        <IconAddressBook color="#0B588D" />
                        <p>Import from phonebook</p>
                    </div>
                    <div className="max-w-[50px] text-center flex flex-col items-center text-xs">
                        <IconQrcode color="#0B588D" />
                        <p>Scan business card</p>
                    </div>
                </div>
                <div className="w-full">
                    <button
                        className="flex shadow-md w-full justify-between rounded-md opacity-80 p-3"
                        type="button" >
                        <IconAddressBook />
                        <p>All Contact</p>
                        <IconSquareRoundedChevronRight />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center mt-8 mb-3">
                <h5 className="text-lg font-semibold text-[10px] md:text-[24px]">All contact</h5>
                <button className="p-2 bg-primary rounded-md text-xs text-second" onClick={()=>window.location.href='contact/add'} type="button"> + Add Contact </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]"> Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]"> Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]"> Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]">
                            Company ----
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]">
                            Company ----
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]">
                            Company ----
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]">  Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-[10px] md:text-[18px]">Adinda Istika Maulia</p>
                        <p className=" font-semibold text-slate-400 text-[10px] md:text-[13px]">  Company ---- </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;

