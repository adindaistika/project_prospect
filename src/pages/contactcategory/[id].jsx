import ModalContact from "@/components/modal/modalContact";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactById,
  getContact,
  postContact,
} from "../../../store/reducers/contact/contact.action";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

export default function Contact() {
  const dispatch = useDispatch();
  const { data_contact, data_contact_meta } = useSelector(
    (state) => state.contact
  );
  const [show_modal, set_modal] = useState(false);
  const [item_id, set_item_id] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const handleEdit = async (data) => {
    console.log(data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      let konfirmasi = confirm("Are you sure?");
      if (konfirmasi) {
        dispatch(deleteContactById({ id }));
        dispatch(getContact());
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let payload = {
      page: 1,
    };
    dispatch(getContact(payload));
  }, []);

  useEffect(() => {
    console.log(show_modal);
  }, [show_modal]);

  const showModal = () => {
    set_item_id(null);
    set_modal(true);
  };

  const showUpdateModal = (id) => {
    set_item_id(id);
    set_modal(true);
  };

  const handlePaginationList = (page) => {
    let currentQuery = {
      page: page.selected + 1,
    };
    dispatch(getContact(currentQuery));
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-end">
        <button
          className=" mb-5 block text-right btn font-semibold"
          onClick={() => showModal()}
        >
          + Add Contact
        </button>
      </div>
      <ModalContact
        set_show_modal={set_modal}
        show={show_modal}
        id={item_id}
        category_id={id}
      ></ModalContact>
      <div className=" shadow-2xl rounded-md">
        <table className="w-full table-auto text-left text-sm font-light">
          <thead className="border-t font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                Nama
              </th>
              <th scope="col" className="px-6 py-4">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-4">
                Work Phone Number
              </th>
              <th scope="col" className="px-6 py-4">
                Home Phone Number
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data_contact?.length > 0 &&
              data_contact?.map((item, k) => (
                <tr className="border-t dark:border-neutral-500 text-slate-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {k + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                    <Image
                      src="/static/auth/kontak.jpg"
                      className="rounded-full w-10 h-10 object-cover"
                      width={42}
                      height={42}
                      alt="Image-kontak"
                    />
                    <span>
                      {item.firstName} {item.lastName}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.phoneNumber}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.workNumber}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.homeNumber}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                  <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                    <div
                      onClick={() => handleDelete(item.id)}
                      className="bg-transparent cursor-pointer w-max"
                    >
                      <IconTrash color="red" />
                    </div>
                    <div
                      onClick={() => showUpdateModal(item.id)}
                      className="bg-transparent p-1 cursor-pointer w-max"
                    >
                      <IconPencilMinus color="green" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          {data_contact?.length > 0 && (
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
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "CONTACT" },
  };
}
