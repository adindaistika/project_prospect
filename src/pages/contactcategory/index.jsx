import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconClipboardText } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../store/reducers/contact/contact.action";

export default function contactcategori() {
  const dispatch = useDispatch();
  const { data_contact } = useSelector(state => state.contact)

  useEffect(() => {
    dispatch(getContact())
  }, [])

  // const handleEdit = async (data) => {
  //   console.log(data);
  // }

  const handleDelete = async (id) => {
    console.log(id)
    try {
      let konfirmasi = confirm("Are you sure?")
      if (konfirmasi) {
        dispatch(deleteContactById({ id }))
        dispatch(getContact())
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-full">
      <div className="shadow-2xl rounded-md">
        <table className="w-max table-auto text-left text-sm font-light">
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
            {
              data_contact.length > 0 && data_contact.map((item, i) => (
                <tr className="border-t dark:border-neutral-500 text-slate-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                  <td className="whitespace-nowrap px-6 py-4  items-center ">
                    <span>{`${item.firstName} ${item.lastName}`}</span>
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
                    <div onClick={() => handleDelete(item.id)} className="bg-transparent w-max">
                      <IconTrash color="red" />
                    </div>
                    <div onClick={() => document.getElementById(`editcontact_${item.id}`).showModal()} className="bg-transparent p-1 w-max">
                      <IconPencilMinus color="green" />
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: 'CONTACT CATEGORY' },
  };
}