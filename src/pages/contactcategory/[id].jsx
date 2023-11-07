import ModalContact from "@/components/modal/modalContact";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactById, getContact, postContact } from "../../../store/reducers/contact/contact.action";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone_number: yup.string().required(),
  home_number: yup.string().required(),
  work_number: yup.string().required(),
  email: yup.string().required(),
  category_id: yup.string().required(),
})

export default function Contact() {
  const dispatch = useDispatch();
  const { data_contact } = useSelector(state => state.contact)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });


  const onAddContact = async (data) => {
    console.log(data)
    try {
      await dispatch(postContact(data))
      reset()
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleEdit = async (data) => {
    console.log(data);
  }

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

  useEffect(() => {
    dispatch(getContact())
  }, [])

  return (
    <div className="w-full">
      <div className="flex w-full justify-end">
        <button
          className=" mb-5 block text-right btn font-semibold"
          onClick={() => document.getElementById("modalcontact").showModal()}
        >
          + Add Contact
        </button>
      </div>
      <dialog id="modalcontact" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Contact</h3>
          <form className="mt-5 " onSubmit={() => {
            handleSubmit(onAddContact)
            return document.getElementById("modalcontact").close()
          }
          }>
            <div className="grid grid-cols-2 gap-3 ">
              <label className="flex my-2 flex-col gap-1 text-xs w-full">
                <span className="text-xs font-bold text-black">First Name</span>
                <input
                  className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                  type="text"
                  required
                  placeholder="Your First Name"
                  name="first_name"
                  id="first_name"
                  {...register('first_name')}
                />
              </label>
              <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                <span className="text-xs font-bold text-black">Last Name</span>
                <input
                  className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                  type="text"
                  required
                  placeholder="Your Last Name"
                  name="last_name"
                  id="last_name"
                  {...register('last_name')}
                />
              </label>
            </div>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs font-bold text-black">Phone Number</span>
              <input
                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                type="text"
                required
                placeholder="Your Phone Number"
                name="phone_number"
                id="phone_number"
                {...register('phone_number')}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs font-bold text-black">Home phone number</span>
              <input
                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                type="text"
                required
                placeholder="Your Home Number"
                name="home_number"
                id="home_number"
                {...register('home_number')}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs font-bold text-black">Work phone number</span>
              <input
                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                type="text"
                required
                placeholder="Your Work  Number"
                name="work_number"
                id="work_number"
                {...register('work_number')}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs font-bold text-black">Email</span>
              <input
                className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                type="email"
                required
                placeholder="Your Email"
                name="email"
                id="email"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col w-full" htmlFor="category_id">
              <span className="font-bold text-xs text-black">Category</span>
              <select
                className="bg-white-700 text-xs text-black border border-slate-300 p-2 rounded-md outline-none"
                name="category_id"
                id="category_id"
                {...register('category_id')}
              >
                <option className="text-black text-xs" value="prospects">prospects</option>
                <option className="text-black text-xs" value="team">team</option>
                <option className="text-black text-xs" value="client">client</option>
              </select>
            </label>
            <button
              className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
              type="submit"
            >
              Add Contact
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop bg-[#0000004d]"><button>close</button></form>
      </dialog>
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
                  <div onClick={() => handleDelete(item.id)} className="bg-transparent cursor-pointer w-max">
                    <IconTrash color="red" />
                  </div>
                  <div onClick={() => document.getElementById(`editcontact_${item.id}`).showModal()} className="bg-transparent p-1 cursor-pointer w-max">
                    <IconPencilMinus color="green" />
                  </div>
                </td>
                <dialog id={`editcontact_${item.id}`} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">Edit Contact</h3>
                    <form className="mt-5 " onSubmit={() => {
                      handleSubmit(handleEdit)
                      return document.getElementById(`editcontact_${item.id}`).close()
                    }
                    }>
                      <div className="grid grid-cols-2 gap-3 ">
                        <label className="flex my-2 flex-col gap-1 text-xs w-full">
                          <span className="text-xs font-bold text-black">First Name</span>
                          <input
                            className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                            type="text"
                            required
                            placeholder="Your First Name"
                            name="first_name"
                            id="first_name"
                            {...register('first_name')}
                          />
                        </label>
                        <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                          <span className="text-xs font-bold text-black">Last Name</span>
                          <input
                            className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                            type="text"
                            required
                            placeholder="Your Last Name"
                            name="last_name"
                            id="last_name"
                            {...register('last_name')}
                          />
                        </label>
                      </div>
                      <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-black">Phone Number</span>
                        <input
                          className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                          type="text"
                          required
                          placeholder="Your Phone Number"
                          name="phone_number"
                          id="phone_number"
                          {...register('phone_number')}
                        />
                      </label>
                      <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-black">Home phone number</span>
                        <input
                          className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                          type="text"
                          required
                          placeholder="Your Home Number"
                          name="home_number"
                          id="home_number"
                          {...register('home_number')}
                        />
                      </label>
                      <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-black">Work phone number</span>
                        <input
                          className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                          type="text"
                          required
                          placeholder="Your Work  Number"
                          name="work_number"
                          id="work_number"
                          {...register('work_number')}
                        />
                      </label>
                      <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-black">Email</span>
                        <input
                          className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                          type="email"
                          required
                          placeholder="Your Email"
                          name="email"
                          id="email"
                          {...register('email')}
                        />
                      </label>
                      <label className="flex flex-col w-full" htmlFor="category_id">
                        <span className="font-bold text-xs text-black">Category</span>
                        <select
                          className="bg-white-700 text-xs text-black border border-slate-300 p-2 rounded-md outline-none"
                          name="category_id"
                          id="category_id"
                          {...register('category_id')}
                        >
                          <option className="text-black text-xs" value="prospects">prospects</option>
                          <option className="text-black text-xs" value="team">team</option>
                          <option className="text-black text-xs" value="client">client</option>
                        </select>
                      </label>
                      <button
                        className="mt-3 w-full bg-sky-800 hover:bg-transparent hover transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
                        type="submit"
                      >
                        Edit Contact
                      </button>
                    </form>
                  </div>
                  <form method="dialog" className="modal-backdrop bg-[#0000004d]"><button>close</button></form>
                </dialog>
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