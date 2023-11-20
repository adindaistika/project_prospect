import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getContact,getContactById,postContact,updateContact,} from "../../../store/reducers/contact/contact.action";
import { useState } from "react";
import { Swallalert } from "../../../helper/helper";
import { useRef } from "react";
import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModalContact(payload) {
  const { show, set_show_modal, id, category_id } = payload;
  const [busy, set_busy] = useState(false);
  const { detail_contact, data_contact_meta } = useSelector(
    (state) => state.contact
  );
  const ref = useRef(null);
  const dispatch = useDispatch();

  const schema = yup.object({
    first_name: yup.string().required("required"),
    last_name: yup.string().required("required"),
    phone_number: yup.string().required("required"),
    home_number: yup.string().required("required"),
    work_number: yup.string().required("required"),
    email: yup.string().required("required"),
    category_id: yup.string().required("required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("category_id", category_id);
  }, [category_id]);

  useEffect(() => {
    if (id) {
      dispatch(getContactById(id)); //Jika id tidak null atau pada saat update akan menjalankan function getContactById
    }
  }, [id, show]);

  // Jika detail kontak tidak null/pada saat update akan setValue field yang dibutuhkan
  useEffect(() => {
    if (detail_contact) {
      setValue("first_name", detail_contact?.firstName);
      setValue("last_name", detail_contact?.lastName);
      setValue("phone_number", detail_contact?.phoneNumber);
      setValue("home_number", detail_contact?.homeNumber);
      setValue("work_number", detail_contact?.workNumber);
      setValue("email", detail_contact?.email);
    }
    console.log(data_contact_meta.current_page);
  }, [detail_contact]);

  const onSubmit = async (data) => {
    let payload = {
      id: id,
      form: data,
    };
    let dataContact = {
      page: data_contact_meta.current_page,
    };
    try {
      set_busy(true);
      if (!id) {
        //jika tidak ada id/tambah data
        dispatch(postContact(data));
      } else {
        //jika ada id/update data
        dispatch(updateContact(payload));
      }
      set_busy(false);
      Swallalert("success", {
        message: "Data berhasil disimpan",
      });
      console.log(data_contact_meta.current_page);
      dispatch(getContact(dataContact));
      set_show_modal(false);
    } catch (e) {
      alert(e);
      set_busy(false);
      if (e.response?.data) {
        Swallalert("error-form", Object.values(e.response.data.errors)[0]);
      } else {
        Swallalert("error", e.response);
      }
    }
  };

  return (
    <>
      <div
        className={`bg-[#000]/60 modal animated faster overflow-y-auto fixed w-full h-full bg-grey-cover top-0 left-0 items-center justify-center flex z-50   ${
          show
            ? "modal-active z-50 opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative w-full h-auto my-auto">
          <div
            className="modal-content rounded-[10px] w-full h-auto tablet:h-auto tablet:my-10 max-w-[640px] bg-white mx-auto tablet:rounded-md z-50 relative self-center py-[22px] px-[26px] md:my-0 md:w-[100vw]"
            ref={ref}
          >
            <div className="flex justify-between">
              <div className="text-lg font-bold">
                {id ? "Update Contact" : "Add Contact "}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => (!busy ? set_show_modal(false) : false)}
              >
                <IconX />
              </div>
            </div>
            <div className="mt-[30px]">
              <form className="mt-5 ">
                <div className="grid grid-cols-2 gap-3 ">
                  <label className="flex my-2 flex-col gap-1 text-xs w-full">
                    <span className="text-xs font-bold text-black">
                      First Name
                    </span>
                    <input
                      className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                      type="text"
                      required
                      placeholder="Your First Name"
                      name="first_name"
                      id="first_name"
                      {...register("first_name")}
                    />
                    <p className="text-red-500">{errors.first_name?.message}</p>
                  </label>
                  <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                    <span className="text-xs font-bold text-black">
                      Last Name
                    </span>
                    <input
                      className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                      type="text"
                      required
                      placeholder="Your Last Name"
                      name="last_name"
                      id="last_name"
                      {...register("last_name")}
                    />
                    <p className="text-red-500">{errors.last_name?.message}</p>
                  </label>
                </div>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                  <span className="text-xs font-bold text-black">
                    Phone Number
                  </span>
                  <input
                    className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                    type="text"
                    required
                    placeholder="Your Phone Number"
                    name="phone_number"
                    id="phone_number"
                    {...register("phone_number")}
                  />
                  <p className="text-red-500">{errors.phone_number?.message}</p>
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                  <span className="text-xs font-bold text-black">
                    Home phone number
                  </span>
                  <input
                    className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                    type="text"
                    required
                    placeholder="Your Home Number"
                    name="home_number"
                    id="home_number"
                    {...register("home_number")}
                  />
                  <p className="text-red-500">{errors.home_number?.message}</p>
                </label>
                <label className="flex my-2 flex-col gap-1 text-xs w-full">
                  <span className="text-xs font-bold text-black">
                    Work phone number
                  </span>
                  <input
                    className="p-3 rounded-md outline-none border border-slate-300 text-sky"
                    type="text"
                    required
                    placeholder="Your Work  Number"
                    name="work_number"
                    id="work_number"
                    {...register("work_number")}
                  />
                  <p className="text-red-500">{errors.work_number?.message}</p>
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
                    {...register("email")}
                  />
                  <p className="text-red-500">{errors.email?.message}</p>
                </label>
                <label className="flex flex-col w-full" htmlFor="category_id">
                  <span className="font-bold text-xs text-black">Category</span>
                  <select
                    className="bg-white-700 text-xs text-black border border-slate-300 p-2 rounded-md outline-none"
                    name="category_id"
                    id="category_id"
                    {...register("category_id")}
                  >
                    <option className="text-black text-xs" value="Prospects">
                      Prospects
                    </option>
                    <option className="text-black text-xs" value="Hot Leads">
                      Hot Leads
                    </option>
                    <option
                      className="text-black text-xs"
                      value="Actively Selling"
                    >
                      Actively Selling
                    </option>
                    <option
                      className="text-black text-xs"
                      value="Actively Followup"
                    >
                      Actively Followup
                    </option>
                    <option className="text-black text-xs" value="Won">
                      Won
                    </option>
                    <option className="text-black text-xs" value="Lost">
                      Lost
                    </option>
                  </select>
                  <p className="text-red-500">{errors.category_id?.message}</p>
                </label>
                <button
                  className="mt-3 w-full bg-sky-800 hover:bg-transparent hover:text-sky-800 hover:border-2 hover:border-sky-800 transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                >
                  {id ? "Update Contact" : "Add Contact"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
