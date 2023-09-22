import { IconBell } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";

const Messagetemplate = () => {
    return (
        <main>
            <header className="flex flex-col sm:flex-row justify-between lg:items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-black lg:text-left font-semibold">MESSAGE TEMPLATE</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <IconBell color="#0B588D" />
                    <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo" />
                </div>
            </header>

            <div className="w-full my-5 gap-3">
                <table
                    cellPadding={8}
                    className="w-full border-collapse border border-slate-300 ">
                    <thead className="bg-sky-600">
                        <tr>
                            <th className="border border-slate-300 text-white">No</th>
                            <th className="border border-slate-300 text-white">Nama</th>
                            <th className="border border-slate-300 text-white">Message</th>
                            <th className="border border-slate-300 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td className="border border-slate-300 text-center">1</td>
                            <td className="border border-slate-300 text-center">Adinda Istika</td>
                            <td className="border border-slate-300 text-center">
                            Halo meeting hari ini sangat menyenangkan....
                            </td>
                            <td className="text-xs font-semibold border border-slate-300">
                                <div className="flex justify-center items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 text-center">2</td>
                            <td className="border border-slate-300 text-center">Octaviani</td>
                            <td className="border border-slate-300 text-center">
                            Halo meeting hari ini sangat menyenangkan....
                            </td>
                            <td className="text-xs font-semibold border border-slate-300">
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 text-center">3</td>
                            <td className="border border-slate-300 text-center">Jono joni</td>
                            <td className="border border-slate-300 text-center">
                            Halo meeting hari ini sangat menyenangkan....
                            </td>
                            <td className="text-xs font-semibold border border-slate-300">
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
                                    <IconPencilMinus width={20} />
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 text-center">4</td>
                            <td className="border border-slate-300 text-center">meloni</td>
                            <td className="border border-slate-300 text-center">
                            Halo meeting hari ini sangat menyenangkan....
                            </td>
                            <td className="text-xs font-semibold border border-slate-300">
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-red-600 ">
                                    <IconTrash width={20} />
                                </div>
                                <div className="text-green-700 ">
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
export default Messagetemplate;