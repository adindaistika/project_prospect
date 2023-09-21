import { IconBell } from "@tabler/icons-react";

const AddContact = () => {
    return (
        <main className="text-black min-h-screen">
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left font-semibold">ADD CONTACT</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo" />
                </div>
            </header>
            <form className="mt-5">
                <div className="grid grid-cols-2 gap-3 ">
                    <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-600">First Name</span>
                        <input
                            className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                            type="text"
                            required
                            placeholder="Your First Name"
                            name="firstname"
                            id="firstname"
                        />
                    </label>
                    <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                        <span className="text-xs font-bold text-sky-600">Last Name</span>
                        <input
                            className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                            type="text"
                            required
                            placeholder="Your Last Name"
                            name="lastname"
                            id="lastname"
                        />
                    </label>
                </div>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-sky-600">Phone Number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                        type="text"
                        required
                        placeholder="Your Phone Number"
                        name="phonenumber"
                        id="phonenumber"
                    />
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-sky-600">Home phone number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                        type="text"
                        required
                        placeholder="Your Home Phone Number"
                        name="homePhoneNumber"
                        id="homePhoneNumber"
                    />
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-sky-600">Work phone number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                        type="text"
                        required
                        placeholder="Your Work Phone Number"
                        name="workPhoneNumber"
                        id="workPhoneNumber"
                    />
                </label>
                <label className="flex flex-col w-full" htmlFor="category">
                    <span className="font-bold text-xs text-sky-600">Category</span>
                    <select
                        className="bg-white-700 text-xs text-sky-600 border border-sky-700 p-2 rounded-md outline-none"
                        name="actegory"
                        id="category">
                        <option className="text-sky-600 text-xs" value="prospects">prospects</option>
                        <option className="text-sky-600 text-xs" value="team">team</option>
                        <option className="text-sky-600 text-xs" value="client">client</option>
                    </select>
                </label>
                <button
                    className="mt-[20px] w-full bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold"
                    type="submit">
                    Add Contact
                </button>
            </form>
        </main>
    );
};

export default AddContact;