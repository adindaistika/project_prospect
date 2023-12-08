import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/reducers/auth/auth.action";
import { useRouter } from "next/router";
import { Swallalert } from "../../../helper/helper";
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [busy, set_busy] = useState(false);

  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      set_busy(true);
      await dispatch(loginUser(data));
      router.push("/");
      set_busy(false);
    } catch (e) {
      set_busy(false);
      if (e.response?.data) {
        Swallalert("error-form", Object.values(e.response.data.errors)[0]);
      } else {
        Swallalert("error", e.response);
      }
    }
  };

  return (
    <div className="min-h-screen px-[20px] grid place-items-center">
      <div className="w-full md:max-w-lg p-8 rounded-lg shadow-lg bg-white text-sky-600">
        <img
          src="/static/auth/logo.png"
          className="w-[90px] m-auto"
          alt="Logo"
        ></img>
        <h1 className="text-center mt-5 text-2xl font-bold">LOGIN PAGE</h1>
        <form
          className="flex flex-col gap-1 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex my-2 flex-col gap-1 text-xs w-full">
            <span className="text-xs font-bold text-sky-600">Email</span>
            <input
              className="p-3 w-full rounded-md outline-none border border-sky-600 text-sky"
              type="email"
              required
              placeholder="Your Email"
              {...register("email")}
            />
          </label>
          <label className="flex my-2 flex-col gap-1 text-xs w-full">
            <span className="text-xs font-bold text-sky-600">Password</span>
            <input
              className="p-3 w-full rounded-md outline-none border border-sky-600 text-sky"
              type="password"
              required
              placeholder="Your Password"
              {...register("password")}
            />
          </label>
          <button
            disabled={busy}
            className={`${
              busy ? "bg-sky-400" : "bg-sky-600"
            } hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold`}
            type="submit"
          >
            {busy ? "Loading..." : "Login Now"}
          </button>
        </form>
        <p className="text-xs font-semibold text-center mb-10">
          Don't have an account? <Link href={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
