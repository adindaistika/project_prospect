import { IconBell } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";

const Massmessage = () => {
    return (
        <main>
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left font-semibold">MASS MESSAGE</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo" />
                </div>
            </header>
            <div className="grid justify-items-end mt-8 mb-3">
                <button className="p-3 bg-primary rounded-md text-xs text-second" onClick={() => window.location.href = 'massmessage/sendmessage'} type="button"> + Add Message </button>
            </div>
            <div className="w-full my-5 gap-3">
                <table
                    cellPadding={8}
                    className="w-full border-collapse border border-slate-500 table-fixed"
                >
                    <thead className="bg-sky-600">
                        <tr>
                            <th className="border border-slate-600 text-white">No</th>
                            <th className="border border-slate-600 text-white">Message</th>
                            <th className="border border-slate-600 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-600 text-center">1</td>
                            <td className="border border-slate-600">Halo meeting hari ini sangat menyenangkan....</td>
                            <td className="text-xs font-semibold border border-slate-600">
                                <div className="flex justify-center items-center space-x-2">
                                    <div className="text-sky-600 bg-sky-400 p-2 inline-block rounded-md ">
                                        <IconSend width={20} />
                                    </div>
                                    <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md ">
                                        <IconTrash width={20} />
                                    </div>
                                    <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                        <IconPencilMinus width={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-600 text-center">2</td>
                            <td className="border border-slate-600">Halo meeting hari ini sangat menyenangkan....</td>
                            <td className="text-xs font-semibold border border-slate-600">
                                <div className="flex justify-center items-center space-x-2">
                                    <div className="text-sky-600 bg-sky-400 p-2 inline-block rounded-md ">
                                        <IconSend width={20} />
                                    </div>
                                    <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md">
                                        <IconTrash width={20} />
                                    </div>
                                    <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                        <IconPencilMinus width={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-600 text-center">3</td>
                            <td className="border border-slate-600">Halo meeting hari ini sangat menyenangkan....</td>
                            <td className="text-xs font-semibold border border-slate-600">
                                <div className="flex justify-center items-center space-x-2">
                                    <div className="text-sky-600 bg-sky-400 p-2 inline-block rounded-md ">
                                        <IconSend width={20} />
                                    </div>
                                    <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md ">
                                        <IconTrash width={20} />
                                    </div>
                                    <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                        <IconPencilMinus width={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-600 text-center">4</td>
                            <td className="border border-slate-600">Halo meeting hari ini sangat menyenangkan....</td>
                            <td className="text-xs font-semibold border border-slate-600">
                                <div className="flex justify-center items-center space-x-2">
                                    <div className="text-sky-600 bg-sky-400 p-2 inline-block rounded-md ">
                                        <IconSend width={20} />
                                    </div>
                                    <div className="text-red-600 bg-red-400 p-2 inline-block rounded-md ">
                                        <IconTrash width={20} />
                                    </div>
                                    <div className="text-green-700 bg-green-500 p-2 inline-block rounded-md">
                                        <IconPencilMinus width={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Massmessage;