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

const ModalEditEvents = ({ id }) => {
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
      meeting_with: yup.string().required(),
      latitude: yup.string().required(),
      longitude: yup.string().required(),
      location: yup.string().required(),
      note: yup.string().required(),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addEvent = async (data) => {
    dispatch(postEvent(data));
    dispatch(getEvent());
    reset();
    document.getElementById("modalEditEvents").close();
  };

  useEffect(() => {
    setLocationSelect(`${location.lat}  ${location.lng}`);
  }, [location]);

  return (
    <>
      <dialog id={`modalEditEvents_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Edit Events</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(addEvent)}
            action=""
          >
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold text-black">Title</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-black"
                type="text"
                required
                placeholder="Add Title"
                name="title"
                id="title"
                {...register("title")}
              />
            </label>
            <label className="flex flex-col" htmlFor="selectContact">
              <div className="font-bold text-xs text-black">Meeting With</div>
              <select
                className="outline-none w-full bg-white font-bold border-slate-300 border p-2 rounded-md text-xs text-black"
                name="selectContact"
                id="selectContact"
                {...register("meeting_with")}
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
            <label className="flex flex-col" htmlFor="selectContact">
              <div className="font-bold text-xs text-black">Meeting Type</div>
              <select
                className="outline-none w-full bg-white font-bold border-slate-300 border p-2 rounded-md text-xs text-black"
                name="selectContact"
                id="selectContact"
              >
                <option className="text-black" value="presentation">
                  presentation
                </option>
                <option className="text-black" value="follow up">
                  follow up
                </option>
                <option className="text-black" value="call">
                  call
                </option>
                <option className="text-black" value="other">
                  other
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
                <span className="text-xs font-bold text-black">Reminder</span>
                <input
                  className="p-3 rounded-md outline-none border border-slate-300 text-black"
                  type="date"
                  required
                  placeholder="Add Reminder"
                  name="reminder"
                  id="reminder"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-3 ">
              <label className="flex  flex-col gap-1 text-xs w-full">
                <span className="text-xs font-bold text-black">Latitude</span>
                <input
                  className="p-3 rounded-md outline-none border border-slate-300 text-black"
                  type="text"
                  required
                  placeholder="Add your latitude"
                  name="latitude"
                  id="latitude"
                  {...register("latitude")}
                />
              </label>
              <label className="flex flex-col gap-1 text-xs w-ful">
                <span className="text-xs font-bold text-black">Longitude</span>
                <input
                  className="p-3 rounded-md outline-none border border-slate-300 text-black"
                  type="text"
                  required
                  placeholder="Add your longitude"
                  name="longitude"
                  id="longitude"
                  {...register("longitude")}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-xs w-full">
              <span className="text-xs font-bold text-black">Location</span>
              <div className="flex p-2 rounded-md outline-none border border-slate-300 text-skyw-full">
                <input
                  className="w-full rounded-md outline-none text-black"
                  type="text"
                  required
                  placeholder="Add Your Location"
                  name="location"
                  id="location"
                  {...register("location")}
                />
                <IconMapPin width={20} />
                {/* <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <LocationPicker onLocationChange={handleLocationChange} />
                  </div>
                </dialog> */}
              </div>
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
                name="settimereminder"
                id="settimereminder"
              />
            </label>
            <label className="flex flex-col" htmlFor="Note">
              <div className="font-bold text-xs text-black">Note</div>
              <textarea
                className="outline-none w-full bg-white border-slate-300 border p-2 rounded-md text-xs"
                name="note"
                rows={5}
                id="note"
                {...register("note")}
              ></textarea>
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

export default ModalEditEvents;