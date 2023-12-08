import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconClipboardText } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContact,
  getContactCategory,
} from "../../../store/reducers/contact/contact.action";
import ModalContact from "@/components/modal/modalContact";
import { useState } from "react";
import { useRouter } from "next/router";
import ModalCategory from "@/components/modal/modalCategory";
import ModalEditCategory from "@/components/modal/modalEditCategory";
import { deleteCategory } from "../../../store/reducers/contactcategory/contactcategory.action";

export default function contactcategori() {
  const dispatch = useDispatch();
  const [busy, set_busy] = useState(false);
  const { data_contact_category } = useSelector((state) => state.contact);
  const [item_id, set_item_id] = useState(null);
  const [show_modal, set_modal] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    set_busy(true);
    dispatch(getContactCategory());
    set_busy(false);
  }, []);

  const handleEdit = async (data) => {
    console.log(data);
  };

  const handleDelete = async (id) => {
    try {
      let konfirmasi = confirm("Are you sure?");
      if (konfirmasi) {
        dispatch(deleteCategory({ id }));
        dispatch(getContactCategory());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const showUpdateModal = (id) => {
    set_item_id(id);
    set_modal(true);
  };

  const showModal = () => {
    set_item_id(null);
    set_modal(true);
  };

  useEffect(() => {
    console.log(show_modal);
  }, [show_modal]);

  return (
    <div className="w-full">
      <div className="flex w-full justify-end">
        <button
          className="mb-5 block text-right btn font-semibold"
          onClick={() => document.getElementById("addcategory").showModal()}
        >
          + Add Category
        </button>
        <ModalCategory />
      </div>
      <div className="shadow-lg rounded-md">
        <table className="w-full table-auto text-left text-sm font-light">
          <thead className="font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                Nama
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data_contact_category.length > 0 ? (
              data_contact_category.map((item, i) => (
                <tr className="border-t dark:border-neutral-500 text-slate-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap font-medium px-6 py-4 items-center ">
                    <span>{item.category_name}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                    <Link
                      href={`/contactcategory/${item.id}`}
                      className="bg-transparent p-1 w-max"
                    >
                      <IconClipboardText color="black" />
                    </Link>
                    <div
                      onClick={() => handleDelete(item.id)}
                      className="bg-transparent cursor-pointer w-max"
                    >
                      <IconTrash color="red" />
                    </div>
                    <div
                      onClick={() =>
                        document
                          .getElementById(`editcategory_${item.id}`)
                          .showModal()
                      }
                      className="bg-transparent cursor-pointer p-1 w-max"
                    >
                      <IconPencilMinus color="green" />
                    </div>
                    <ModalEditCategory id={item.id} data={item} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>
                  <div className="w-full h-full mb-3 grid place-items-center">
                    <h5 className="mt-7 flex items-center gap-3 font-semibold">
                      <span className="loading loading-spinner loading-lg"></span>{" "}
                      Data sedang kosong...
                    </h5>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "CONTACT CATEGORY" },
  };
}
