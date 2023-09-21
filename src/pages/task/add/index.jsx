import { IconBell } from "@tabler/icons-react";
const AddTask = () => {
    return (
        <main className="text-black min-h-screen">
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left font-semibold">ADD TASK</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo" />
                </div>
            </header>
            <form className="flex flex-col gap-3" action="">
                <label className="flex my-2 flex-col gap-1 text-xs w-ful">
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
                <label className="flex flex-col" htmlFor="description">
                    <div className="font-bold text-sky-800 text-xs">Description</div>
                    <textarea
                        className="outline-none w-full bg-white text-sky-800 border border-sky-800 p-2 rounded-md text-xs"
                        name="description"
                        rows={5}
                        id="description"></textarea>
                </label>
                <label className="flex flex-col" htmlFor="selectContact">
                    <div className="font-bold text-sky-800 text-xs">Contact</div>
                    <select
                        className="outline-none w-full bg-white text-sky-800 font-bold border border-sky-800 p-2 rounded-md text-xs"
                        name="selectContact"
                        id="selectContact"
                    >
                        <option className="text-sky-800" value="Adinda">Adinda</option>
                        <option className="text-sky-800" value="Vivi">Vivi</option>
                        <option className="text-sky-800" value="Rahmat">Rahmat</option>
                    </select>
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                    <div className="text-xs font-bold text-sky-800">Date Time</div>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="date"
                        required
                        placeholder="Add date time"
                        name="date"
                        id="date"
                    />
                </label>
                <label className="flex flex-col" htmlFor="selectContact">
                    <div className="font-semibold text-sky-800 text-xs">Priority</div>
                    <select
                        className="outline-none w-full bg-white text-sky-800 font-semibold border border-sky-800 p-2 rounded-md text-xs"
                        name="selectContact"
                        id="selectContact"
                    >
                        <option className="text-sky-800" value="High">High</option>
                        <option className="text-sky-800" value="Medium">Medium</option>
                        <option className="text-sky-800" value="Low">Low</option>
                    </select>
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                    <div className="text-xs font-bold text-sky-800">Reminder</div>
                    <input
                        className="p-3 rounded-md outline-none border border-sky-800 text-sky"
                        type="date"
                        required
                        placeholder="Add rimender"
                        name="rimender"
                        id="rimender"
                    />
                </label>
                <button
                    className="mt-[20px] w-full bg-sky-800 hover:bg-transparent hover:text-sky-800 border-2 transition-all ease-in-out border-sky-800 p-3 text-xs rounded-md text-white font-bold"
                    type="submit">
                    Add Task
                </button>
            </form>
        </main>
    );
};

export default AddTask;