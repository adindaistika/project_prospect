import { IconSearch } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactCategory } from "../../../store/reducers/contactcategory/contactcategory.action";
import ModalProspect from "@/components/modal/ModalProspect";
import {
  getContact,
  getContactByCategory,
  getContactById,
} from "../../../store/reducers/contact/contact.action";
import ReactPaginate from "react-paginate";

export default function prospect() {
  const dispatch = useDispatch();
  const { data_contactcategory } = useSelector(
    (state) => state.contactcategory
  );
  const { data_contact, data_contact_meta } = useSelector(
    (state) => state.contact
  );
  const [contact, setContact] = useState([]);
  const [busy, set_busy] = useState(false);
  const [check_all, setCheck_all] = useState(true);
  const [category_id, set_category_id] = useState(null);

  // const search = (query) => {
  //   if (query.trim() === "") {
  //     setContact(data_contact);
  //   } else {
  //     const result = data_contactcategory.filter((item) =>
  //       item.user_first_name.toLowerCase().includes(query.toLowerCase())
  //     );
  //     console.log(result);
  //     setContact(result);
  //   }
  // };

  useEffect(() => {
    setContact(data_contact);
  }, [data_contact]);

  useEffect(() => {
    set_busy(true);
    dispatch(getContactCategory());
    dispatch(getContact(1));
    set_busy(false);
  }, []);

  const selectCategory = async (id) => {
    if (id == 0) {
      dispatch(getContact(1));
      setCheck_all(true);
    } else {
      let payload = {
        id: id,
        page: 1,
      };
      set_category_id(id);
      setCheck_all(false);
      dispatch(getContactByCategory(payload));
    }
  };

  const handlePaginationList = (page) => {
    let currentQuery = {
      page: page.selected + 1,
      id: category_id,
    };
    if (check_all) {
      dispatch(getContact(currentQuery.page));
    } else {
      dispatch(getContactByCategory(currentQuery));
    }
  };

  return (
    <main className=" min-h-screen">
      <div className="flex gap-[10px]">
        <select
          onChange={(e) => selectCategory(e.target.value)}
          className="outline-none focus:outline-none select w-full max-w-xs rounded-md shadow-md text-[#9ca3af]"
        >
          <option selected value={0} key={0}>
            All Category
          </option>
          {data_contactcategory.length > 0 &&
            data_contactcategory.map((item, k) => (
              <option value={item.id} key={k + 1}>
                {item.category_name}
              </option>
            ))}
        </select>
        <div className="flex w-full mx-auto p-2 rounded-md shadow-md">
          <input
            className="outline-none px-2 w-full"
            type="text"
            placeholder="Search contact"
            name="search"
            id="search"
            // onChange={(e) => search(e.target.value)}
          />
          <IconSearch />
        </div>
      </div>
      <div
        className={`${
          contact.length > 0 ? "grid md:grid-cols-3" : "w-full h-screen"
        } mt-5 gap-3`}
      >
        {contact.length > 0 ? (
          contact.map((item, i) => (
            <div
              onClick={() => {
                dispatch(getContactById(item.id));
                return document.getElementById(`modalprospect`).showModal();
              }}
              className="flex items-center gap-3 p-3 rounded-md shadow-md"
            >
              <img
                src="/static/auth/profile.jpeg"
                className="w-[60px] mb-3 rounded-full"
              ></img>
              <div>
                <p className="font-semibold">{item.full_name}</p>
                <p className="text-xs font-semibold text-slate-400">
                  {item.phoneNumber}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full grid place-items-center">
            <h5 className="mt-7 flex items-center gap-3 font-semibold">
              <span className="loading loading-spinner loading-lg"></span> Data
              sedang kosong...
            </h5>
          </div>
        )}
        <ModalProspect />
      </div>
      <div>
        {data_contact_meta?.last_page > 1 && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            activeClassName={"active"}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            pageCount={data_contact_meta?.last_page}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e) => handlePaginationList(e)}
          />
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
