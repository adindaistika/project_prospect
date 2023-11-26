import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { getContactCategory } from "../../../store/reducers/contact/contact.action";
import { postCategory } from "../../../store/reducers/contactcategory/contactcategory.action";

const ModalCategory = () => {
  const dispatch = useDispatch();
  const schema = yup.object({
    name: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addcategory = async (data) => {
    dispatch(postCategory(data));
    dispatch(getContactCategory());
    reset();
    document.getElementById("addcategory").close();
  };
  return (
    <>
      <dialog id="addcategory" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Category</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(addcategory)}
          >
            <label className="flex flex-col mt-2" htmlFor="category_name">
              <div className="font-bold mb-2 text-xs">Category Name</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-sky"
                type="text"
                required
                placeholder="Category Name"
                name="category_name"
                id="category_name"
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

export default ModalCategory;
