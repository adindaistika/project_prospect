import { IconSearch } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";

const Prospect = () => {
    return (
        <main className="className=px-4 sm:px-8 md:px-16 lg:px-24 xl:px-30 min-h-screen">
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
            <div className="w-full">
                <button
                    className="flex shadow-md w-full justify-between rounded-md opacity-80 p-3"
                    type="button" >
                    <IconAddressBook />
                    <p>All Contact</p>
                    <IconSquareRoundedChevronRight />
                </button>
            </div>
            <button className="p-2 bg-primary rounded-md text-xs text-second" onClick={() => window.location.href = 'contact/add'} type="button"> + Add Contact </button>
        </main>
    );
};

export default Prospect;

