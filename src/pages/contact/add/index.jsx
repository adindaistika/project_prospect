const AddContact = () => {
    return (
        <main className="w-full lg:max-w-4xl lg:mx-auto text-sky-800 p-7">
            <h1 className="text-center font-bold text-2xl">Add Contact</h1>
            <form className="mt-5">
                <div className="grid grid-cols-2 gap-3 ">
                    <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-800">First Name</span>
                        <input
                            className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                            type="text"
                            required
                            placeholder="Your First Name"
                            name="firstname"
                            id="firstname"
                        />
                    </label>
                    <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                        <span className="text-xs font-bold text-sky-800">Last Name</span>
                        <input
                            className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                            type="text"
                            required
                            placeholder="Your Last Name"
                            name="lastname"
                            id="lastname"
                        />
                    </label>
                </div>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-sky-800">Phone Number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="text"
                        required
                        placeholder="Your Phone Number"
                        name="phonenumber"
                        id="phonenumber"
                    />
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-sky-800">Home phone number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="text"
                        required
                        placeholder="Your Home Phone Number"
                        name="homePhoneNumber"
                        id="homePhoneNumber"
                    />
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-sky-800">Work phone number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="text"
                        required
                        placeholder="Your Work Phone Number"
                        name="workPhoneNumber"
                        id="workPhoneNumber"
                    />
                </label>
                <label className="flex flex-col w-full" htmlFor="category">
                    <span className="font-bold text-xs text-sky-800">Category</span>
                    <select
                        className="bg-white-700 text-xs text-sky-800 border border-sky-700 p-2 rounded-md outline-none"
                        name="actegory"
                        id="category">
                        <option className="text-sky-800 text-xs" value="prospects">prospects</option>
                        <option className="text-sky-800 text-xs" value="team">team</option>
                        <option className="text-sky-800 text-xs" value="client">client</option>
                    </select>
                </label>
                <button
                    className="mt-[20px] w-full bg-sky-800 hover:bg-transparent hover:text-sky-800 border-2 transition-all ease-in-out border-sky-800 p-3 text-xs rounded-md text-white font-bold"
                    type="submit">
                    Add Contact
                </button>
            </form>
        </main>
    );
};

export default AddContact;