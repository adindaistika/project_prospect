import { IconBell } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";

const AddEvents = () => {
    module.exports = {
        //....
        Plugin: [require("daisyui")],
    }
    return (
        <main className="text-black min-h-screen">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-primary font text-lg">Add Events</h1>
                <div className="flex gap-3 items-center">
                    <p>Agust 23,2023 4.30 PM</p>
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
                </div>
            </header>
            <form className="flex flex-col gap-3" action="">
                <label className="flex  flex-col gap-1 text-xs w-full">
                    <div className="text-xs font-bold text-sky-800">Title</div>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="text"
                        required
                        placeholder="Add Title"
                        name="title"
                        id="title"
                    />
                </label>
                <label className="flex flex-col gap-1 text-xs w-full">
                    <div className="text-xs font-bold text-sky-800">Meeting With</div>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="text"
                        required
                        placeholder="Add Your Meeting With"
                        name="meeting with"
                        id="meeting with"
                    />
                </label>
                <label className="flex flex-col" htmlFor="selecttype">
                    <div className="font-bold text-sky-800 text-xs">Meeting Type</div>
                    <select
                        className="outline-none w-full bg-white text-sky-800 font-bold border border-sky-800 p-3 rounded-md text-xs"
                        name="selectType"
                        id="selectType"
                    >
                        <option className="text-sky-800" value="Presentation">Presentation</option>
                        <option className="text-sky-800" value="Follow Up">Follow Up</option>
                        <option className="text-sky-800" value="Call">Call</option>
                        <option className="text-sky-800" value="Other">Other</option>
                    </select>
                </label>
                <div className="grid grid-cols-2 gap-3 ">
                    <label className="flex  flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-800">Start Date</span>
                        <input
                            className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                            type="date"
                            required
                            placeholder="Add Start Date"
                            name="startdate"
                            id="startdate"
                        />
                    </label>
                    <label className="flex flex-col gap-1 text-xs w-ful">
                        <span className="text-xs font-bold text-sky-800">End Date</span>
                        <input
                            className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                            type="date"
                            required
                            placeholder="Add End Date"
                            name="enddate"
                            id="enddate"
                        />
                    </label>
                </div>
                <form>
                    <label className="flex flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-800">Location</span>
                        <div className="flex p-2 rounded-md outline-none border border-sky-800 text-skyw-full">
                            <input
                                className="w-full"
                                type="text"
                                required
                                placeholder="Add Your Location"
                                name="location"
                                id="location"
                            />
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>
                                <IconMapPin />
                            </button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3934878151404!2d115.19195957393637!3d-8.654074788038768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2411e2ffc4c2d%3A0xb8de5c04c550fdf2!2sP.T.%20Galang%20Kangin%20Software!5e0!3m2!1sid!2sid!4v1694826375806!5m2!1sid!2sid"
                                        width="600" height="450" style={{ border: "0" }} allowfullscreen=""
                                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="w-full bg-primary p-3 my-2 rounded-md shadow-md text-center text-xs text-white">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </label>
                </form>
                <label className="flex  flex-col gap-1 text-xs w-full">
                    <div className="text-xs font-bold text-sky-800">Set Time Reminder</div>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="time"
                        required
                        placeholder="Add Set Time Reminder"
                        name="settimereminder"
                        id="settimereminder"
                    />
                </label>
                <label className="flex flex-col" htmlFor="note">
                    <span className="font-semibold text-sky-800">Note</span>
                    <textarea
                        className="outline-none w-full bg-white text-sky-800 placeholder:italic placeholder:text-sky-800 border border-sky-800 p-2 rounded-md text-xs"
                        name="note"
                        rows={5}
                        id="note"
                    ></textarea>
                </label>
                <button
                    className="mt-[20px] w-full bg-sky-800 hover:bg-transparent hover:text-sky-800 border-2 transition-all ease-in-out border-sky-800 p-3 text-xs rounded-md text-white font-bold"
                    type="submit">
                    Add Events
                </button>
            </form>
        </main>
    )
}

export default AddEvents;
