import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  getTutorial,
  postTutorial,
} from "../../../store/reducers/tutorial/tutorial.action";

const ModalTutorial = () => {
  const dispatch = useDispatch();
  const schema = yup
    .object({
      title: yup.string().required(),
      type: yup.string().required(),
      thumbnail_url: yup.string().required(),
      video_url: yup.string().required(),
      description: yup.string().required(),
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

  const addTutorial = async (data) => {
    dispatch(postTutorial(data));
    dispatch(getTutorial());
    reset();
    document.getElementById("modal-tutorial").close();
  };
  return (
    <>
      <dialog id="modal-tutorial" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Tutorial</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(addTutorial)}
            encType="multipart/form-data"
          >
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
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold">Type</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Add Type"
                name="type"
                id="type"
                {...register("type")}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold">Thumbnail</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="file"
                required
                placeholder="Add Thumbnail"
                name="thumbnail_url"
                id="thumbnail_url"
                {...register("thumbnail_url")}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold">Video URL</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Add Video URL"
                name="video_url"
                id="video_url"
                {...register("video_url")}
              />
            </label>
            <label className="flex flex-col" htmlFor="note">
              <div className="font-bold text-xs">Description</div>
              <textarea
                className="outline-none w-full bg-white border-slate-300 border p-2 rounded-md text-xs"
                name="description"
                rows={5}
                id="description"
                {...register("description")}
              ></textarea>
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

export default ModalTutorial;
