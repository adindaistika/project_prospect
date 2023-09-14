const AddEvents = () => {
    return (
        <main className="w-full lg:max-w-3xl lg:mx-auto text-sky-800 p-7">
            <h1 className="text-center font-bold text-2xl">Add Events</h1>
            <form className="flex flex-col gap-3" action="">
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
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
                        className="outline-none w-full bg-white text-sky-800 font-bold border-2 border-sky-800 p-3 rounded-md text-xs"
                        name="selectType"
                        id="selectType"
                    >
                        <option className="text-sky-800" value="">Select Type Meeting</option>
                        <option className="text-sky-800" value="Presentation">Presentation</option>
                        <option className="text-sky-800" value="Follow Up">Follow Up</option>
                        <option className="text-sky-800" value="Call">Call</option>
                        <option className="text-sky-800" value="Other">Other</option>
                    </select>
                </label>
                <div className="grid grid-cols-2 gap-3 ">
                    <label className="flex my-2 flex-col gap-1 text-xs w-full">
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
                    <label className="flex my-2 flex-col gap-1 text-xs w-ful">
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

            </form>
        </main>
    )
}

export default AddEvents;
