import { IconMapPin } from "@tabler/icons-react";
import LocationPicker from "../LocationPicker";
import * as yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  getEvent,
  postEvent,
} from "../../../store/reducers/events/events.action";
import { editEventComming } from "../../../store/reducers/dashboard/dashboard.action";

const ModalEditEventsComming = ({ id, data }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [locationSelect, setLocationSelect] = useState();
  const dispatch = useDispatch();

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    document.getElementById("my_modal_1").close();
  };

  const schema = yup
    .object({
      title: yup.string().required(),
      date: yup.string().required(),
    })
    .required();

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editEvent = async (data) => {
    dispatch(editEventComming({ id, ...data }));
    dispatch(getEvent());
    reset();
    document.getElementById(`modalEditEventsComming_${id}`).close();
  };

  useEffect(() => {
    setValue("name", data.name);
    setValue("date", data.date);
  }, []);

  return (
    <>
      <dialog id={`modalEditEventsComming_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Edit Events</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(editEvent)}
            action=""
          >
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold text-black">Title</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-black"
                type="text"
                required
                placeholder="Add Title"
                name="name"
                id="name"
                {...register("name")}
              />
            </label>
            <label className="flex  flex-col gap-1 text-xs w-full">
              <span className="text-xs font-bold text-black">Start Date</span>
              <input
                className="p-3 rounded-md outline-none border border-slate-300 text-black"
                type="datetime-local"
                required
                placeholder="Add Start Date"
                name="date"
                id="date"
                {...register("date")}
              />
            </label>
            <button
              className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
              type="submit"
            >
              Edit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalEditEventsComming;
