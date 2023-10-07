import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export default function Messagetemplate() {
    return (
        <div className="w-full">
            <div className="text-primary">
                <Link className="mb-5 block text-right" href={"/"}>+ Tambah Pesan Baru</Link>
            </div>
            <div className="overflow-x-scroll pb-[33px] shadow-2xl rounded-md">
                <table className="w-max inline-block text-left text-sm font-light">
                    <thead className="font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 pt-[30px]  pl-[39px] pb-[18px]">
                                ID
                            </th>
                            <th scope="col" className="px-6 pt-[30px] pb-[18px]">
                                Nama
                            </th>
                            <th scope="col" className="px-6 pt-[30px] pb-[18px]">
                                Title
                            </th>
                            <th scope="col" className="px-6 pt-[30px] pb-[18px]">
                                Message
                            </th>
                            <th scope="col" className="px-6 pt-[30px] pr-[75px] pb-[18px]">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-neutral-300">
                            <td className="whitespace-nowrap px-6 pt-[17px] pl-[39px] font-medium">
                                1
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px] flex items-center gap-3">
                                <Image
                                    src="/static/auth/kontak.jpg"
                                    className="rounded-full w-10 h-10 object-cover"
                                    width={42}
                                    height={42}
                                    alt="Image-kontak"
                                />
                                <span>jono bin joni</span>
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px]">
                                Test Kontak Hp Aktif
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px]">
                                Selamat malam saya sedang mengecek kontak...
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px] pr-[75px] flex items-center gap-2">
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
                            <td className="whitespace-nowrap px-6 pt-[17px] pl-[39px] font-medium">
                                2
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px] flex items-center gap-3">
                                <Image
                                    src="/static/auth/kontak.jpg"
                                    className="rounded-full w-10 h-10 object-cover"
                                    width={42}
                                    height={42}
                                    alt="Image-kontak"
                                />
                                <span>jono bin joni</span>
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px]">Promo</td>
                            <td className="whitespace-nowrap px-6 pt-[17px]">
                                Promo bulan April
                            </td>
                            <td className="whitespace-nowrap px-6 pt-[17px] pr-[75px] flex items-center gap-2">
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
    );
};

export async function getServerSideProps() {
    return {
        props: { title: 'MESSAGE TEMPLATE' },
    };
}