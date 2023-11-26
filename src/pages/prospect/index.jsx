import { IconSearch } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactCategory } from "../../../store/reducers/contactcategory/contactcategory.action";

export default function prospect() {
  const dispatch = useDispatch();
  const { data_contactcategory } = useSelector(
    (state) => state.contactcategory
  );

  useEffect(() => {
    dispatch(getContactCategory());
  }, []);
  return (
    <main className=" min-h-screen">
      <div className="flex w-full mx-auto my-4 p-2 rounded-md shadow-md">
        <input
          className="outline-none px-2 w-full"
          type="text"
          placeholder="Search contact"
          name="search"
          id="search"
        />
        <IconSearch />
      </div>
      <div className="flex gap-5 flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <button
            className="flex shadow-md w-full justify-between rounded-md opacity-80 p-3"
            type="button"
          >
            <IconAddressBook />
            <p>All Contact</p>
            <IconSquareRoundedChevronRight />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-5 gap-3">
        {data_contactcategory.length > 0 ? (
          data_contactcategory.map((item, i) => (
            <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
              <img
                src="/static/auth/profile.jpeg"
                className="w-[60px] mb-3 rounded-full"
              ></img>
              <div>
                <p className="font-semibold">{item.contact_name}</p>
                <p className="text-xs font-semibold text-slate-400">
                  {item.category_name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h5 className="font-semibold">Data sedang kosong...</h5>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "PROSPECT" },
  };
}
