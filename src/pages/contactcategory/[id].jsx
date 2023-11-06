import ModalContact from "@/components/modal/modalContact";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../store/reducers/contact/contact.action";
import { useEffect } from "react";

export default function Contact() {
  const dispatch = useDispatch();
  const { data_contact } = useSelector(state => state.contact)

  useEffect(() => {
    dispatch(getContact())
  }, [])

  useEffect(() => {
    console.log(data_contact)
  }, [data_contact])

  return (
    <div className="w-full">
      <button
        className=" mb-5 block text-right"
        onClick={() => document.getElementById("modalcontact").showModal()}
      >
        + Add Contact
      </button>
      <ModalContact />
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
            {data_contact?.length > 0 && data_contact?.map((item, k) => (
              <tr className="border-t dark:border-neutral-500 text-slate-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{k + 1}</td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                  <Image
                    src="/static/auth/kontak.jpg"
                    className="rounded-full w-10 h-10 object-cover"
                    width={42}
                    height={42}
                    alt="Image-kontak"
                  />
                  <span>{item.firstName} {item.lastName}</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.phoneNumber}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.workNumber}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.homeNumber}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                  <div className="bg-transparent w-max">
                    <IconTrash color="red" />
                  </div>
                  <div className="bg-transparent p-1 w-max">
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
};

export async function getServerSideProps() {
  return {
    props: { title: 'CONTACT' },
  };
}