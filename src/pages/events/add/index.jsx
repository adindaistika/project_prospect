import { IconMapPin } from "@tabler/icons-react";

export default function AddEvents() {
    module.exports = {
        //....
        Plugin: [require("daisyui")],
    }
    return (
        <>
            <button
                className="bg-sky-600 p-3 rounded-md shadow-md text-xs text-white"
                onClick={() => document.getElementById("my_modal_2").showModal()}
            >
                Add Events
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-black">Add Events</h3>
                    <form className="flex flex-col gap-3" action="">
                        <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                            <div className="text-xs font-bold text-black">Title</div>
                            <input
                                className="p-3 rounded-md outline-none border-slate-300 border text-black"
                                type="text"
                                required
                                placeholder="Add Title"
                                name="title"
                                id="title"
                            />
                        </label>
                        <label className="flex flex-col" htmlFor="selectContact">
                            <div className="font-bold text-xs text-black">Meeting With</div>
                            <select
                                className="outline-none w-full bg-white font-bold border-slate-300 border p-2 rounded-md text-xs text-black"
                                name="selectContact"
                                id="selectContact"
                            >
                                <option className="text-black" value="Adinda">
                                    Adinda
                                </option>
                                <option className="text-black" value="Vivi">
                                    Vivi
                                </option>
                                <option className="text-black" value="Rahmat">
                                    Rahmat
                                </option>
                            </select>
                        </label>
                        <div className="grid grid-cols-2 gap-3 ">
                            <label className="flex  flex-col gap-1 text-xs w-full">
                                <span className="text-xs font-bold text-black">Start Date</span>
                                <input
                                    className="p-3 rounded-md outline-none border border-slate-300 text-black"
                                    type="date"
                                    required
                                    placeholder="Add Start Date"
                                    name="startdate"
                                    id="startdate"
                                />
                            </label>
                            <label className="flex flex-col gap-1 text-xs w-ful">
                                <span className="text-xs font-bold text-black">End Date</span>
                                <input
                                    className="p-3 rounded-md outline-none border border-slate-300 text-black"
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
                                <span className="text-xs font-bold text-black">Location</span>
                                <div className="flex p-2 rounded-md outline-none border border-slate-300 text-skyw-full">
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
                            <div className="text-xs font-bold text-black">Set Time Reminder</div>
                            <input
                                className="p-3 rounded-md outline-none border border-slate-300 text-black"
                                type="time"
                                required
                                placeholder="Add Set Time Reminder"
                                name="settimereminder"
                                id="settimereminder"
                            />
                        </label>
                        <label className="flex flex-col" htmlFor="Note">
                            <div className="font-bold text-xs text-black">Note</div>
                            <textarea
                                className="outline-none w-full bg-white border-slate-300 border p-2 rounded-md text-xs"
                                name="Note"
                                rows={5}
                                id="Note"
                            ></textarea>
                        </label>
                        <button
                            className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
                            type="submit"
                        >
                            Kirim
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export async function getServerSideProps() {
    return {
        props: { title: 'ADD EVENTS' },
    };
}