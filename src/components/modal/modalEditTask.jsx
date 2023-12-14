import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getTask,
  postTask,
  putTask,
} from "../../../store/reducers/task/task.action";
import { useEffect } from "react";
import { getContact } from "../../../store/reducers/contact/contact.action";

const ModalEditTask = ({ id, data }) => {
  const dispatch = useDispatch();
  const { data_contact } = useSelector((state) => state.contact);
  const schema = yup
    .object({
      contact_id: yup.number().required(),
      title: yup.string().required(),
      note: yup.string().required(),
      priority: yup.string().required(),
      id: yup.number(),
    })
    .required();

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editTask = async (data) => {
    let reminder = `${data.end_date} ${data.reminder}:00`;
    dispatch(putTask({ ...data, reminder }));
    dispatch(getTask());
    reset();
    document.getElementById(`modal-edit-${id}`).close();
  };

  useEffect(() => {
    setValue("id", data.id);
    setValue("title", data.title);
    setValue("start_date", data.start_date);
    setValue("end_date", data.end_date);
    setValue("reminder", data.reminder);
    setValue("contact_id", data.relate_to);
    setValue("note", data.note);

    dispatch(getContact());
  }, []);
  return (
    <>
      <dialog id={`modal-edit-${id}`} className="modal">
        <div className="modal-box text-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit Task</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(editTask)}
          >
            <label className="flex flex-col my-2" htmlFor="contact_id">
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
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
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
              <div className="font-semibold text-xs">Priority</div>
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

export default ModalEditTask;
