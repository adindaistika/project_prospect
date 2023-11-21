import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteTutorialById,getTutorial,} from "../../../store/reducers/tutorial/tutorial.action";
import ModalTutorial from "@/components/modal/modalTutorial";
import { IconTrash } from "@tabler/icons-react";

export default function Tutorials() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data_tutorial } = useSelector((state) => state.tutorial);

  const handleDelete = (id) => {
    const konfirmasi = confirm("Are you sure?");

    if (konfirmasi) {
      dispatch(deleteTutorialById({ id }));
      dispatch(getTutorial());
    }
  };

  useEffect(() => {
    dispatch(getTutorial());
  }, []);
  return (
    <main className="p-5 rounded-md  shadow-md border bg-white text-black">
      <button
        className="bg-sky-600 p-3 mb-3 rounded-md shadow-md text-xs text-white font-regular"
        onClick={() => document.getElementById("modal-tutorial").showModal()}
      >
        Add Tutorial
      </button>
      <ModalTutorial />
      <label
        className="flex items-center p-2 rounded-md border-2 border-slate-200"
        htmlFor="search"
      >
        <input
          className="w-full border-none outline-none"
          type="text"
          name="search"
          id="search"
        />
        <IconSearch className="text-slate-300" />
      </label>
      <div className="mt-5 flex flex-wrap gap-3">
        {data_tutorial.length > 0 ? (
          data_tutorial.map((item, i) => (
            <div
              onClick={() => router.push(`tutorials/${item.id}`)}
              className="cursor-pointer gap-3"
            >
              <img
                src={item.thumbnail_url}
                className="w-56 h-36 bg-slate-400 rounded-md"
              />
              <p className="font-bold pt-1">{item.title || "LKAS"}</p>
              <div
                onClick={() => {
                  handleDelete(item.id);
                }}
                className="text-red-600 flex justify-end cursor-pointer"
              >
                <IconTrash width={20} />
              </div>
            </div>
          ))
        ) : (
          <h1>Data kosong...</h1>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "TUTORIALS" },
  };
}
