"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconUpload } from "@tabler/icons-react";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
  editUser,
  getUserById,
} from "../../../store/reducers/auth/auth.action";
import OverlayLoading from "@/components/OverlayLoading";

export default function Profile() {
  const id = getCookie("id");
  const dispatch = useDispatch();
  const { user_data } = useSelector((state) => state.auth);
  const [image, setImage] = useState(null);
  const [dataImage, setDataImage] = useState(null);
  const [busy, set_busy] = useState(false);

  const schema = yup.object({
    nama: yup.string().required(),
    email: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    let res = await dispatch(
      editUser({ id, foto_profile: dataImage, ...data })
    );
    if (res) {
      alert("Edit data sukses!");
      dispatch(getUserById({ id }));
    }
  };

  useEffect(() => {
    setValue("full_name", user_data.full_name);
    setValue("referral_code", user_data.referral_code);
    setValue("email", user_data.email);
    setImage(user_data.foto_profile);
  }, [user_data]);

  useEffect(() => {
    set_busy(true);
    dispatch(getUserById({ id }));
    set_busy(false);
  }, []);

  return (
    <>
      {!busy ? (
        <form
          onSubmit={handleSubmit(submit)}
          encType="multipart/form-data"
          className="flex w-full items-start gap-5"
        >
          <div className="flex flex-col w-72 mr-5 gap-3 items-center">
            <img
              className="w-56 h-56 object-cover rounded-full"
              src={
                image ||
                user_data.foto_profile ||
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Profile-Image"
            />
            <label htmlFor="profile">
              <span className="bg-slate-500 flex items-center gap-3 p-2 w-max rounded-md text-white font-semibold">
                <IconUpload width={20} /> Ganti Gambar
              </span>
              <input
                className="hidden"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                  setDataImage(e.target.files[0]);
                }}
                type="file"
                name="profile"
                id="profile"
              />
            </label>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3 w-max">
              <label className="flex flex-col gap-2" htmlFor="nama">
                <span className="font-semibold">ID Anda</span>
                <input
                  disabled
                  className="p-2 rounded-md outline-none border border-black"
                  type="text"
                  name="id"
                  id="id"
                  value={user_data.id}
                />
              </label>
              <label className="flex flex-col gap-2" htmlFor="nama">
                <span className="font-semibold">Nama Anda</span>
                <input
                  className="p-2 rounded-md outline-none border border-black"
                  type="text"
                  name="nama"
                  id="nama"
                  {...register("full_name")}
                />
              </label>
              <label className="flex flex-col gap-2" htmlFor="email">
                <span className="font-semibold">Email</span>
                <input
                  className="p-2 rounded-md outline-none border border-black"
                  type="text"
                  name="email"
                  id="email"
                  {...register("email")}
                />
              </label>
              <label className="flex flex-col gap-2" htmlFor="referral_code">
                <span className="font-semibold">Kode Referal</span>
                <input
                  className="p-2 rounded-md outline-none border border-black"
                  type="text"
                  name="referral_code"
                  id="referral_code"
                  {...register("referral_code")}
                />
              </label>
              <button
                className="bg-primary text-white rounded-md font-semibold p-2"
                type="submit"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </form>
      ) : (
        <OverlayLoading />
      )}
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "PROFILE" },
  };
}
