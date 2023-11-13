import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { getTask, postTask } from "../../../store/reducers/task/task.action";

const ModalTask = () => {
  const dispatch = useDispatch();
  const schema = yup
    .object({
      title: yup.string().required(),
      relate_to: yup.string().required(),
      note: yup.string().required(),
      priority: yup.string().required(),
      contact_id: yup.number().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addTask = async (data) => {
    dispatch(postTask(data));
    dispatch(getTask());
    reset();
    document.getElementById("modal-task").close();
  };
  return (
    <>
      <dialog id="modal-task" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Task</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(addTask)}
          >
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold">Contact Id</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Add Contact Id"
                name="contact_id"
                id="contact_id"
                {...register("contact_id")}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold">Title</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Add Title"
                name="title"
                id="title"
                {...register("title")}
              />
            </label>
            <label className="flex flex-col" htmlFor="selectContact">
              <div className="font-bold text-xs">Relate to</div>
              <select
                className="outline-none w-full bg-white font-bold border-slate-300 border p-2 rounded-md text-xs"
                name="selectContact"
                id="selectContact"
                {...register("relate_to")}
              >
                <option className="" value="1">
                  Adinda
                </option>
                <option className="" value="2">
                  Vivi
                </option>
                <option className="" value="3">
                  Rahmat
                </option>
              </select>
            </label>
            <label className="flex flex-col" htmlFor="note">
              <div className="font-bold text-xs">Note</div>
              <textarea
                className="outline-none w-full bg-white border-slate-300 border p-2 rounded-md text-xs"
                name="note"
                rows={5}
                id="note"
                {...register("note")}
              ></textarea>
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
            <label className="flex flex-col" htmlFor="selectContact">
              <div className="font-semibold text-xs">Priority</div>
              <select
                className="outline-none w-full bg-white font-semibold border-slate-300 border p-2 rounded-md text-xs"
                name="selectContact"
                id="selectContact"
                {...register("priority")}
              >
                <option className="" value="high">
                  High
                </option>
                <option className="" value="medium">
                  Medium
                </option>
                <option className="" value="low">
                  Low
                </option>
              </select>
            </label>
            <label className="flex  flex-col gap-1 text-xs w-full">
              <div className="text-xs font-bold text-black">
                Set Time Reminder
              </div>
              <input
                className="p-3 rounded-md outline-none border border-slate-300 text-black"
                type="time"
                required
                placeholder="Add Set Time Reminder"
                name="reminder"
                id="reminder"
              />
            </label>
            <button
              name="submit"
              className="mt-3 w-full bg-sky-800 hover:bg-sky-600 hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop bg-[#0000004d]">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalTask;