import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteMessagetemplate,
  getMessagetemplate,
} from "../../../store/reducers/messagetemplate/messagetemplate.action";
import { useRouter } from "next/router";

export default function Messagetemplate() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data_messagetemplate } = useSelector(
    (state) => state.messagetemplate
  );

  useEffect(() => {
    dispatch(getMessagetemplate());
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-end text-primary">
        <Link
          className="mb-5 grid place-items-center text-right btn font-semibold"
          href={"/messagetemplate/add"}
        >
          + Add Template
        </Link>
      </div>
      <div className="overflow-x-scroll bg-white pb-[33px] shadow-lg rounded-md">
        <table className="w-full inline-block text-left text-sm font-light">
          <thead className="font-medium w-full border-neutral-500">
            <tr>
              <th scope="col" className="px-6 pt-[30px]  pl-[39px] pb-[18px]">
                ID
              </th>
              <th scope="col" className="px-6 pt-[30px] pb-[18px]">
                Title
              </th>
              <th scope="col" className="px-6 pt-[30px] pb-[18px]">
                Message
              </th>
              <th
                scope="col"
                className="px-6 pt-[30px] w-full pr-[75px] pb-[18px]"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data_messagetemplate.length > 0 ? (
              data_messagetemplate.map((item, i) => (
                <tr className="border-t border-neutral-300">
                  <td className="whitespace-nowrap font-medium px-6 pt-[17px] pl-[39px] ">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap font-medium text-slate-500 px-6 pt-[17px]">
                    {item.title}
                  </td>
                  <td className="min-w-[400px] font-medium text-slate-500 px-6 pt-[17px]">
                    {item.message}
                  </td>
                  <td className="whitespace-nowrap font-medium text-slate-500 px-6 pt-[17px] pr-[75px] flex items-center gap-2">
                    <Link
                      href={`/messagetemplate/${item.id}`}
                      className="bg-transparent p-1 w-max"
                    >
                      <IconSend color="black" />
                    </Link>
                    <div
                      onClick={() =>
                        router.push(`/messagetemplate/edit/${item.id}`)
                      }
                      className="bg-transparent p-1 w-max"
                    >
                      <IconPencilMinus color="green" />
                    </div>
                    <div
                      onClick={() => {
                        let konfirmasi = confirm("Are you sure?");
                        if (konfirmasi == true) {
                          dispatch(deleteMessagetemplate(item.id));
                          dispatch(getMessagetemplate());
                        }
                      }}
                      className="bg-transparent cursor-pointer p-1 w-max"
                    >
                      <IconTrash color="red" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <div className="w-full h-full my-5 grid place-items-center">
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
    props: { title: "MESSAGE TEMPLATE" },
  };
}
