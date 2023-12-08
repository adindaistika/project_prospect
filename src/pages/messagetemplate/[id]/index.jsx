import { IconPhoto, IconPlus, IconTrash } from "@tabler/icons-react";
import { IconFileImport } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";
import { IconVideo } from "@tabler/icons-react";
import { IconFileDescription } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagetemplateById } from "../../../../store/reducers/messagetemplate/messagetemplate.action";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as XLSX from "xlsx";

export default function Message() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [contact, setContact] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState();
  const [excel, setExcel] = useState(false);
  const [countFile, setCountFile] = useState({ dokumen: 0, video: 0, foto: 0 });
  const { data_messagetemplateid } = useSelector(
    (state) => state.messagetemplate
  );

  const schema = yup.object({
    nama: yup.string().required(),
    telp: yup.string().required(),
    status: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const hitungFile = () => {
    const data = ["sdfsd.xls", "sdfsd.xls", "sdfsd.xls", "sdkjdsf.png"];

    let dokumen = 0;
    let video = 0;
    let foto = 0;

    data.forEach((item) => {
      const extensi = item.split(".");
      if (
        extensi[extensi.length - 1] == "xls" ||
        extensi[extensi.length - 1] == "xlsx"
      ) {
        dokumen++;
      } else if (extensi[extensi.length - 1] == "mp4") {
        video++;
      } else if (
        extensi[extensi.length - 1] == "jpg" ||
        extensi[extensi.length - 1] == "jpeg" ||
        extensi[extensi.length - 1] == "png"
      ) {
        foto++;
      }
    });

    setCountFile({ dokumen: dokumen, video: video, foto: foto });
  };

  const addContact = (data) => {
    setContact([...contact, data]);
    reset();
  };

  const editContact = (item) => {
    const updatedData = [...contact];
    if (excel) {
      updatedData[index] = [item.nama, item.telp, item.status];
    } else {
      updatedData[index] = { ...item };
    }

    setContact(updatedData);

    document.getElementById("modalcontact").close();
  };

  const deleteContact = (index) => {
    const data = [...contact];
    data.splice(index, 1);
    setContact(data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setExcel(true);
      readExcel(file);
    }
  };

  const readExcel = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const [...filteredData] = excelData;
      console.log(...filteredData);
      setContact(filteredData);
    };

    reader.readAsBinaryString(file);
  };

  useEffect(() => {
    hitungFile();
  }, [data_messagetemplateid]);

  useEffect(() => {
    const id = router.query.id;
    dispatch(getMessagetemplateById(id));
  }, []);
  return (
    <div>
      <span className="font-semibold block mb-2">Title</span>
      <div className="p-9 bg-white rounded-md shadow-[0_16px_50px_rgba(112,144,176,0.20)] text-slate-600">
        <p>{data_messagetemplateid.title}</p>
      </div>
      <span className="font-semibold block my-2">Message</span>
      <div className="p-9 bg-white rounded-md shadow-[0_16px_50px_rgba(112,144,176,0.20)] text-slate-600">
        <p>{data_messagetemplateid.message}</p>
      </div>
      <h3 className="font-semibold mt-5">File Attachment</h3>
      <div className="flex gap-3">
        <div className="w-43 bg-white p-6 rounded-md shadow-[0_16px_50px_rgba(112,144,176,0.20)]">
          <div className="flex gap-5 justify-between">
            <IconFileDescription color="#19b9cf" />
            <p>{countFile.dokumen} Files</p>
          </div>
          <p className="font-semibold">Dokumen</p>
        </div>
        <div className="w-43 bg-white p-6 rounded-md shadow-[0_16px_50px_rgba(112,144,176,0.20)]">
          <div className="flex gap-5 justify-between">
            <IconVideo color="#6c7475" />
            <p>{countFile.video} Files</p>
          </div>
          <p className="font-semibold">Video</p>
        </div>
        <div className="w-43 bg-white p-6 rounded-md shadow-[0_16px_50px_rgba(112,144,176,0.20)]">
          <div className="flex gap-5 justify-between">
            <IconPhoto color="#633985" />
            <p>{countFile.foto} Files</p>
          </div>
          <p className="font-semibold">Foto</p>
        </div>
      </div>
      <div className="my-5 flex gap-3">
        <button
          className="flex justify-center items-center gap-3 p-3 rounded-md bg-[#388DCB] text-white shadow-[0_16px_50px_rgba(112,144,176,0.20)]"
          onClick={() => {
            if (excel) {
              setContact([]);
            }
            setExcel(false);
            document.getElementById("modalcontact").showModal();
          }}
          type="button"
        >
          <IconPlus />
          <span className="font-medium">Tambah Kontak</span>
        </button>
        {/* <button
                    className="flex justify-center items-center gap-3 p-3 rounded-md bg-green-800 text-white shadow-md"
                    type="button"
                >
                    <IconDownload />
                    <span className="font-medium">Import Phonebook</span>
                </button> */}
        <label
          htmlFor="file"
          className="flex justify-center items-center gap-3 p-3 rounded-md bg-[#44328D] text-white shadow-md"
        >
          <IconFileImport />
          <input
            className="hidden"
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
          />
          <span className="font-medium">Import Form Excel</span>
        </label>
        <button
          className="flex justify-center items-center gap-3 p-3 rounded-md bg-[#117E8D] text-white shadow-md "
          onClick={() => setContact([])}
          type="button"
        >
          <IconTrash />
          <span className="font-medium">Hapus Antrean</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full shadow-md rounded-md bg-white text-left text-sm font-light ">
                <thead className="font-medium">
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
                {contact.length > 0 ? (
                  <tbody>
                    {excel
                      ? contact.map((item, i) => (
                          <tr className="border-t dark:border-neutral-500 text-slate-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {i + 1}
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4 flex items-center gap-3">
                              <Image
                                src="/static/auth/kontak.jpg"
                                className="rounded-full w-10 h-10 object-cover"
                                width={42}
                                height={42}
                                alt="Image-kontak"
                              />
                              <span>{item[0]}</span>
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4">
                              {item[1]}
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4">
                              {item[2].toLowerCase() == "success" ? (
                                <span className="px-2 py-1 rounded-md text-xs bg-green-600 text-white">
                                  Sukses
                                </span>
                              ) : (
                                <span className="px-2 py-1 rounded-md text-xs bg-red-600 text-white">
                                  Gagal
                                </span>
                              )}
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4">
                              {data_messagetemplateid.message}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                              <div
                                onClick={() => {
                                  setIndex(i);
                                  setEdit(true);
                                  setValue("nama", item[0]);
                                  setValue("telp", item[1]);
                                  setValue("status", item[2]);
                                  return document
                                    .getElementById("modalcontact")
                                    .showModal();
                                }}
                                className="bg-transparent p-1 w-max"
                              >
                                <IconPencilMinus color="green" />
                              </div>
                              <div
                                onClick={() => deleteContact(i)}
                                className="bg-transparent w-max"
                              >
                                <IconTrash color="red" />
                              </div>
                            </td>
                          </tr>
                        ))
                      : contact.map((item, i) => (
                          <tr className="border-t dark:border-neutral-500 text-slate-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {i + 1}
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4 flex items-center gap-3">
                              <Image
                                src="/static/auth/kontak.jpg"
                                className="rounded-full w-10 h-10 object-cover"
                                width={42}
                                height={42}
                                alt="Image-kontak"
                              />
                              <span>{item.nama}</span>
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4">
                              {item.telp}
                            </td>
                            <td className="whitespace-nowrap font-medium px-6 py-4">
                              {item.status.toLowerCase() == "success" ? (
                                <span className="px-2 py-1 rounded-md text-xs bg-green-600 text-white">
                                  Sukses
                                </span>
                              ) : (
                                <span className="px-2 py-1 rounded-md text-xs bg-red-600 text-white">
                                  Gagal
                                </span>
                              )}
                            </td>
                            <td className="min-w-[300px] font-medium px-6 py-4">
                              {data_messagetemplateid.message}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                              <div
                                onClick={() => {
                                  setIndex(i);
                                  setEdit(true);
                                  setValue("nama", item.nama);
                                  setValue("telp", item.telp);
                                  setValue("status", item.status);
                                  return document
                                    .getElementById("modalcontact")
                                    .showModal();
                                }}
                                className="bg-transparent p-1 w-max"
                              >
                                <IconPencilMinus color="green" />
                              </div>
                              <div
                                onClick={() => deleteContact(i)}
                                className="bg-transparent w-max"
                              >
                                <IconTrash color="red" />
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                ) : (
                  <tr>
                    <td colSpan={6}>
                      <h6 className="p-5 text-center font-semibold ">
                        Data contact kosong...
                      </h6>
                    </td>
                  </tr>
                )}
              </table>
            </div>
          </div>
        </div>
        {/* <div className="join mx-auto">
            <button className="join-item btn">«</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">»</button>
          </div> */}
      </div>

      <button
        className="flex  mt-3 font-medium justify-center items-center gap-3 py-2 px-7 rounded-md bg-primary text-white"
        type="button"
      >
        <span>Kirim</span>
      </button>
      <dialog id="modalcontact" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Add Contact</h3>
          <form
            className="flex flex-col gap-3"
            onSubmit={
              edit ? handleSubmit(editContact) : handleSubmit(addContact)
            }
            action=""
          >
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold text-black">Nama</div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-black"
                type="text"
                required
                placeholder="Add Nama"
                name="Nama"
                id="Nama"
                {...register("nama")}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold text-black">
                Nomor Telephone
              </div>
              <input
                className="p-3 rounded-md outline-none border-slate-300 border text-black"
                type="number"
                required
                placeholder="Add Nomor Telephone"
                name="Nomor Telephone"
                id="Nomor Telephone"
                {...register("telp")}
              />
            </label>
            <label className="flex flex-col" htmlFor="status">
              <div className="font-bold text-xs text-black">Status</div>
              <select
                className="outline-none w-full bg-white  border-slate-300 border p-2 rounded-md text-xs text-black"
                name="status"
                id="status"
                {...register("status")}
              >
                <option disabled className="text-black" value="">
                  Pilih status{" "}
                </option>
                <option className="text-black" value="success">
                  Success
                </option>
                <option className="text-black" value="Failed">
                  Failed
                </option>
              </select>
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-ful">
              <div className="text-xs font-bold text-black">Keterangan</div>
              <textarea
                className="p-3 rounded-md outline-none border-slate-300 border text-black"
                required
                name="Keterangan"
                id="Keterangan"
              ></textarea>
            </label>
            <button
              className="mt-3 w-full bg-sky-800 hover:bg-transparent hover:text-sky-800 hover:border-2 border-sky-800 transition-all ease-in-out p-3 text-xs rounded-md text-white font-bold"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "MESSAGE" },
  };
}
