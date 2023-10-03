import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconClipboardText } from "@tabler/icons-react";
import Link from "next/link";

const contactcategori = () => {
    return (
        <div className="w-full">
            <div className="">
                <h1 className="mb-5 text-black lg:text-left text-lg font-bold">CONTACT CATEGORY</h1>
            </div>
            <div className="text-primary">
                <Link className="mb-5 block text-right" href={"/"}>+ Tulis Pesan Baru</Link>
            </div>
            <div className="inline-block min-w-full shadow-2xl rounded-md">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
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
                                <td className="whitespace-nowrap px-6 py-4">bc tgl 14 mei batch 1</td>
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
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                                    <span>jono bin joni</span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">bc tgl 14 mei batch 1</td>
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
                                <td className="whitespace-nowrap px-6 py-4">bc tgl 14 mei batch 1</td>
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
        </div>
    );
};

export default contactcategori;