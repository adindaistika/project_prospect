const ModalContact = () => {
    return (
        <>
            <dialog id="modalcontact" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Add Contact</h3>
                    <form className="mt-5">
                <div className="grid grid-cols-2 gap-3 ">
                    <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-black">First Name</span>
                        <input
                            className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                            type="text"
                            required
                            placeholder="Your First Name"
                            name="firstname"
                            id="firstname"
                        />
                    </label>
                    <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                        <span className="text-xs font-bold text-black">Last Name</span>
                        <input
                            className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                            type="text"
                            required
                            placeholder="Your Last Name"
                            name="lastname"
                            id="lastname"
                        />
                    </label>
                </div>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-black">Phone Number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                        type="text"
                        required
                        placeholder="Your Phone Number"
                        name="phonenumber"
                        id="phonenumber"
                    />
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-black">Home phone number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                        type="text"
                        required
                        placeholder="Your Home Phone Number"
                        name="homePhoneNumber"
                        id="homePhoneNumber"
                    />
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-black">Work phone number</span>
                    <input
                        className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                        type="text"
                        required
                        placeholder="Your Work Phone Number"
                        name="workPhoneNumber"
                        id="workPhoneNumber"
                    />
                </label>
                <label className="flex flex-col w-full" htmlFor="category">
                    <span className="font-bold text-xs text-black">Category</span>
                    <select
                        className="bg-white-700 text-xs text-black border border-slate-300 p-2 rounded-md outline-none"
                        name="actegory"
                        id="category">
                        <option className="text-black text-xs" value="prospects">prospects</option>
                        <option className="text-black text-xs" value="team">team</option>
                        <option className="text-black text-xs" value="client">client</option>
                    </select>
                </label>
                        <button
                            className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
                            type="submit"
                        >
                            Add Contact
                        </button>
                    </form>
                </div>
                <form method="dialog" class="modal-backdrop bg-[#0000004d]"><button>close</button></form>
            </dialog>
        </>
    );
};

export default ModalContact;
