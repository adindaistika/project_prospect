import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { getContactCategory } from "../../../store/reducers/contact/contact.action";
import {
  postCategory,
  putCategory,
} from "../../../store/reducers/contactcategory/contactcategory.action";
import { useEffect } from "react";

const ModalEditCategory = ({ id, data }) => {
  const dispatch = useDispatch();
  const schema = yup.object({
    name: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editcategory = async (data) => {
    dispatch(putCategory({ id, ...data }));
    dispatch(getContactCategory());
    reset();
    document.getElementById(`editcategory_${id}`).close();
  };

  useEffect(() => {
    setValue("name", data.category_name);
  }, []);
  return (
    <>
      <dialog id={`editcategory_${id}`} className="modal">
        <div className="modal-box text-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit Contact Category</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(editcategory)}
          >
            <label className="flex flex-col mt-2" htmlFor="name">
              <div className="font-bold mb-2 text-xs">Category Name</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Category Name"
                name="name"
                id="name"
                {...register("name")}
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

export default ModalEditCategory;
