import { IconSearch } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactCategory } from "../../../store/reducers/contactcategory/contactcategory.action";
import ModalProspect from "@/components/modal/ModalProspect";
import { getContactById } from "../../../store/reducers/contact/contact.action";

export default function prospect() {
  const dispatch = useDispatch();
  const { data_contactcategory } = useSelector(
    (state) => state.contactcategory
  );
  const [contact, setContact] = useState(data_contactcategory);

  const search = (query) => {
    if (query.trim() === "") {
      setContact(data_contactcategory);
    } else {
      const result = data_contactcategory.filter((item) =>
        item.contact_name.toLowerCase().includes(query.toLowerCase())
      );
      setContact(result);
    }
  };

  useEffect(() => {
    dispatch(getContactCategory());
  }, []);

  useEffect(() => {
    setContact(data_contactcategory);
    console.log(contact);
  }, [data_contactcategory]);
  return (
    <main className=" min-h-screen">
      <div className="flex w-full mx-auto my-4 p-2 rounded-md shadow-md">
        <input
          className="outline-none px-2 w-full"
          type="text"
          placeholder="Search contact"
          name="search"
          id="search"
          onChange={(e) => search(e.target.value)}
        />
        <IconSearch />
      </div>
      <div className="grid md:grid-cols-3 mt-5 gap-3">
        {contact.length > 0 ? (
          contact.map((item, i) => (
            <>
              <div
                onClick={() => {
                  dispatch(getContactById(item.contact_id));
                  return document.getElementById(`modalprospect`).showModal();
                }}
                className="flex items-center gap-3 p-3 rounded-md shadow-md"
              >
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
            </>
          ))
        ) : (
          <h5 className="font-semibold">Data sedang kosong...</h5>
        )}
        <ModalProspect />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "PROSPECT" },
  };
}
