import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutorial } from "../../../store/reducers/tutorial/tutorial.action";

export default function Tutorials() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data_tutorial } = useSelector((state) => state.tutorial);

  useEffect(() => {
    dispatch(getTutorial());
  }, []);
  return (
    <main className="p-2 rounded-md  shadow-md border bg-white text-black">
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
      <div className="mt-5 grid gap-3 grid-cols-2">
        {data_tutorial.length > 0 ? (
          data_tutorial.map(() => (
            <div
              onClick={() => router.push(`tutorials/1`)}
              className="flex items-center cursor-pointer gap-3"
            >
              <div className="w-56 h-36 bg-slate-400 rounded-md"></div>
              <div>
                <p className="font-bold">Tutorial Memiliki Banyak Uang</p>
                <p className="italic">Oleh: Adinda</p>
                <p>14 Agustus 2023</p>
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
