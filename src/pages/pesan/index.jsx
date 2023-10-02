import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const pesan = () => {
    return (
        <div className="flex flex-col rounded-md shadow-md">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 shadows-md">
                <div className="flex justify-between items-center text-primary">
                        <Link href={"/"}>+ Tambah Pesan Baru</Link>
                    </div>
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-t font-medium dark:border-neutral-500">
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
                                        Message
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                                        <Image
                                            src="/static/auth/kontak.jpg" className="rounded-full w-10 h-10 object-cover" width={42} height={42} alt="Image-kontak" />
                                        <span>jono bin joni</span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">Test Kontak Hp Aktif</td>
                                    <td className="whitespace-nowrap px-6 py-4">Selamat malam saya sedang mengecek kontak...</td>
                                    <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                                        <div className="bg-transparent w-max">
                                            <IconSend color="black" />
                                        </div>
                                        <div className="bg-transparent p-1 w-max">
                                            <IconPencilMinus color="green" />
                                        </div>
                                        <div className="bg-transparent w-max">
                                            <IconTrash color="red" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                                        <Image
                                            src="/static/auth/kontak.jpg" className="rounded-full w-10 h-10 object-cover" width={42} height={42} alt="Image-kontak" />
                                        <span>jono bin joni</span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">Promo</td>
                                    <td className="whitespace-nowrap px-6 py-4">Promo bulan April</td>
                                    <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                                        <div className="bg-transparent w-max">
                                            <IconSend color="black" />
                                        </div>
                                        <div className="bg-transparent p-1 w-max">
                                            <IconPencilMinus color="green" />
                                        </div>
                                        <div className="bg-transparent w-max">
                                            <IconTrash color="red" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pesan;