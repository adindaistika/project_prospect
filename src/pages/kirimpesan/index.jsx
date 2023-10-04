import { IconPhoto, IconPlus, IconTrash } from "@tabler/icons-react";
import { IconFileImport } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";
import { IconVideo } from "@tabler/icons-react";
import { IconFileDescription } from "@tabler/icons-react";
import Image from "next/image";

export default function Kirimpesan() {
    return (
        <div>
            <div className="p-9 rounded-md shadow-md text-slate-600">
                <p>
                    Selamat Malam, saya sedang mengecek kontak yang masih aktif.
                    tolong di balas pesannya agar saya tahu kontaknya masih aktif. Terimakasih
                </p>
            </div>
            <h3 className="font-semibold mt-5">File Attachment</h3>
            <div className="flex gap-3">
                <div className="w-43 p-6 rounded-md shadow-md">
                    <div className="flex gap-5 justify-between">
                        <IconFileDescription color="#19b9cf" />
                        <p>0 Files</p>
                    </div>
                    <p className="font-semibold">Dokumen</p>
                </div>
                <div className="w-43 p-6 rounded-md shadow-md">
                    <div className="flex gap-5 justify-between">
                        <IconVideo color="#6c7475" />
                        <p>0 Files</p>
                    </div>
                    <p className="font-semibold">Video</p>
                </div>
                <div className="w-43 p-6 rounded-md shadow-md">
                    <div className="flex gap-5 justify-between">
                        <IconPhoto color="#633985" />
                        <p>0 Files</p>
                    </div>
                    <p className="font-semibold">Foto</p>
                </div>
            </div>
            <div className="my-3 flex gap-3">
                <button
                    className="flex justify-center items-center gap-3 p-3 rounded-md bg-primary text-white shadow-md"
                    type="button"
                >
                    <IconPlus />
                    <span>Tambah Kontak</span>
                </button>
                <button
                    className="flex justify-center items-center gap-3 p-3 rounded-md bg-green-800 text-white shadow-md"
                    type="button"
                >
                    <IconDownload />
                    <span>Import Phonebook</span>
                </button>
                <button
                    className="flex justify-center items-center gap-3 p-3 rounded-md bg-indigo-800 text-white shadow-md"
                    type="button"
                >
                    <IconFileImport />
                    <span>Import File</span>
                </button>
                <button
                    className="flex justify-center items-center gap-3 p-3 rounded-md bg-sky-800 text-white shadow-md "
                    type="button"
                >
                    <IconTrash />
                    <span>Hapus Antrean</span>
                </button>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light ">
                                <thead className="border-t font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Nomor Telephone
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Keterangan
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t dark:border-neutral-500 text-slate-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            1
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                                            <Image src="/static/auth/kontak.jpg" className="rounded-full w-10 h-10 object-cover" width={42} height={42} alt="Image-kontak" />
                                            <span>jono bin joni</span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">08123455777</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className="px-2 py-1 rounded-md text-xs bg-green-600 text-white">
                                                Sukses
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            Berhasil Mengirim Pesan
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                                            <div className="bg-transparent p-1 w-max">
                                                <IconPencilMinus color="green" />
                                            </div>
                                            <div className="bg-transparent w-max">
                                                <IconTrash color="red" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-t dark:border-neutral-500 text-slate-600">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium ">
                                            2
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                                            <Image src="/static/auth/kontak.jpg" className="rounded-full w-10 h-10 object-cover" width={42} height={42} alt="Image-kontak" />
                                            <span>jono bin joni</span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">08123455777</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className="px-2 py-1 rounded-md text-xs bg-red-600 text-white">
                                                Gagal
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                                        Selamat Malam, saya sedang mengecek kontak yang masih aktif.
                                        tolong di balas pesannya agar saya tahu kontaknya masih aktif Terimakasih
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                                            <div className="bg-transparent p-1 w-max">
                                                <IconPencilMinus color="green" />
                                            </div>
                                            <div className="bg-transparent w-max">
                                                <IconTrash color="red" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-t dark:border-neutral-500 text-slate-600">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            3
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                                            <Image src="/static/auth/kontak.jpg" className="rounded-full w-10 h-10 object-cover" width={42} height={42} alt="Image-kontak" />
                                            <span>jono bin joni</span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">08123455777</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className="px-2 py-1 rounded-md text-xs bg-green-600 text-white">
                                                Sukses
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                           Berhasil Mengirim Pesan 
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
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
                <div className="join mx-auto">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>
            <button
                className="flex justify-center items-center gap-3 py-2 px-5 rounded-md bg-primary text-white"
                type="button"
            >
                <span>Kirim</span>
            </button>
        </div>
    );
};

export async function getServerSideProps() {
    return {
      props: {title: 'KIRIM PESAN'},
    };
  }