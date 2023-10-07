import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconClipboardText } from "@tabler/icons-react";
import Link from "next/link";

export default function contactcategori() {
    return (
      <div className="w-full">
        <div className="overflow-x-scroll shadow-2xl rounded-md">
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
              <tr className="border-t dark:border-neutral-500 text-slate-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                  <span>jono bin joni</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  bc tgl 14 mei batch 1
                </td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                  <Link
                    href={"/contactcategory/1"}
                    className="bg-transparent p-1 w-max"
                  >
                    <IconClipboardText color="black" />
                  </Link>
                  <div className="bg-transparent w-max">
                    <IconTrash color="red" />
                  </div>
                  <div className="bg-transparent p-1 w-max">
                    <IconPencilMinus color="green" />
                  </div>
                </td>
              </tr>
              <tr className="border-t dark:border-neutral-500 text-slate-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                  <span>jono bin joni</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  bc tgl 14 mei batch 1
                </td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                  <div className="bg-transparent p-1 w-max">
                    <IconClipboardText color="black" />
                  </div>
                  <div className="bg-transparent w-max">
                    <IconTrash color="red" />
                  </div>
                  <div className="bg-transparent p-1 w-max">
                    <IconPencilMinus color="green" />
                  </div>
                </td>
              </tr>
              <tr className="border-t dark:border-neutral-500 text-slate-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                  <span>jono bin joni</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  bc tgl 14 mei batch 1
                </td>
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                  <div className="bg-transparent p-1 w-max">
                    <IconClipboardText color="black" />
                  </div>
                  <div className="bg-transparent w-max">
                    <IconTrash color="red" />
                  </div>
                  <div className="bg-transparent p-1 w-max">
                    <IconPencilMinus color="green" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export async function getServerSideProps() {
    return {
      props: {title: 'CONTACT CATEGORY'},
    };
  }