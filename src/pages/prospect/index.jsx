import { IconSearch } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";

const Prospect = () => {
    return (
        <main className=" min-h-screen">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-primary font text-lg">Prospect</h1>
                <div className="flex gap-3 items-center">
                    <p>Agust 23,2023 4.30 PM</p>
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
                </div>
            </header>
            <div className="flex w-full mx-auto my-4 p-2 rounded-md shadow-md">
                <input className="outline-none w-full" type="text" name="search" id="search" />
                <IconSearch />
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="w-1/2 ">
                    <button
                        className="flex shadow-md w-full justify-between rounded-md opacity-80 p-3"
                        type="button"
                    >
                        <IconAddressBook />
                        <p>All Contact</p>
                        <IconSquareRoundedChevronRight />
                    </button>
                </div>
                <select
                    className="bg-primary p-2 rounded-md outline-none w-40 text-white"
                    name="filter"
                    id="filter"
                >
                    <option className="bg-white text-sky-800" selected>Filter</option>
                    <option className="bg-white text-sky-800" value="Prospect" >Prospect</option>
                    <option className="bg-white text-sky-800" value="Hot Leads">Hot Leads</option>
                    <option className="bg-white text-sky-800" value="Actively Selling">Actively Selling</option>
                    <option className="bg-white text-sky-800" value="Actively Followup">Actively Followup</option>
                    <option className="bg-white text-sky-800" value="Won">Won</option>
                    <option className="bg-white text-sky-800" value="Lost">Lost</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400"> Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400"> Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400"> Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400">
                            Company ----
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400">
                            Company ----
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400">
                            Company ----
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400">  Company ---- </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
                    <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full"></img>
                    <div>
                        <p className="font-semibold">Adinda Istika Maulia</p>
                        <p className="text-xs font-semibold text-slate-400">  Company ---- </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Prospect;

