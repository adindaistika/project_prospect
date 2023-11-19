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

export default function contactcategori() {
  const dispatch = useDispatch();
  const { data_contact_category } = useSelector((state) => state.contact);
  const [item_id, set_item_id] = useState(null);
  const [show_modal, set_modal] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getContactCategory(1));
  }, []);

  const handleEdit = async (data) => {
    console.log(data);
  };

  const handleDelete = async (id) => {
    try {
      let konfirmasi = confirm("Are you sure?");
      if (konfirmasi) {
        dispatch(deleteContactById({ id }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const showUpdateModal = (id) => {
    set_item_id(id);
    set_modal(true);
  };

  useEffect(() => {
    console.log(show_modal);
  }, [show_modal]);

  return (
    <div className="w-full">
      <ModalContact
        set_show_modal={set_modal}
        show={show_modal}
        id={item_id}
        category_id={id}
      ></ModalContact>
      <div className="shadow-2xl rounded-md">
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
                Title
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data_contact_category.length > 0 &&
              data_contact_category.map((item, i) => (
                <tr className="border-t dark:border-neutral-500 text-slate-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4  items-center ">
                    <span>{item.category_name}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    bc tgl 14 mei batch 1
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
                      className="bg-transparent w-max"
                    >
                      <IconTrash color="red" />
                    </div>
                    <div
                      onClick={() => showUpdateModal(item.id)}
                      className="bg-transparent p-1 w-max"
                    >
                      <IconPencilMinus color="green" />
                    </div>
                  </td>
                </tr>
              ))}
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
