import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getTask, postTask } from "../../../store/reducers/task/task.action";
import { useEffect } from "react";
import { getContact } from "../../../store/reducers/contact/contact.action";

const ModalTask = () => {
  const dispatch = useDispatch();
  const { data_contact } = useSelector((state) => state.contact);
  const schema = yup
    .object({
      title: yup.string().required(),
      note: yup.string().required(),
      priority: yup.string().required(),
      contact_id: yup.number().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addTask = async (data) => {
    let reminder = `${data.end_date} ${data.reminder}:00`;
    dispatch(postTask({ ...data, reminder }));
    dispatch(getTask());
    reset();
    document.getElementById("modal-task").close();
  };

  useEffect(() => {
    dispatch(getContact());
  }, []);
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
            <label className="flex flex-col" htmlFor="contact_id">
              <div className="font-bold text-xs">Contact Id</div>
              <select
                className="outline-none w-full bg-white font-bold border-slate-300 border p-2 rounded-md text-xs"
                name="contact_id"
                id="contact_id"
                {...register("contact_id")}
              >
                <option selected disabled value="">
                  Pilih contact id
                </option>
                {data_contact.map((item, index) => (
                  <option
                    key={index}
                    selected={item.id == getValues("contact_id")}
                    value={item.id}
                  >{`${item.id} - ${item.user_first_name} ${item.user_last_name}`}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold">Title</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Edit Title"
                name="title"
                id="title"
                {...register("title")}
              />
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
                  name="start_date"
                  id="start_date"
                  {...register("start_date")}
                />
              </label>
              <label className="flex flex-col gap-1 text-xs w-ful">
                <span className="text-xs font-bold text-black">End Date</span>
                <input
                  className="p-3 rounded-md outline-none border border-slate-300 text-black"
                  type="date"
                  required
                  placeholder="Add End Date"
                  name="end_date"
                  id="end_date"
                  {...register("end_date")}
                />
              </label>
            </div>
            <label className="flex flex-col" htmlFor="selectContact">
              <div className="text-xs font-bold text-black">Priority</div>
              <select
                className="outline-none w-full bg-white font-semibold border-slate-300 border p-2 rounded-md text-xs"
                name="selectContact"
                id="selectContact"
                {...register("priority")}
              >
                <option className="" value="hight">
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
                {...register("reminder")}
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
