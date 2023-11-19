import { IconCalendarEvent } from "@tabler/icons-react";
import { IconClockHour4 } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconClipboardText } from "@tabler/icons-react";
import ModalTask from "@/components/modal/modalTask";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteTaskById,
  getTask,
} from "../../../store/reducers/task/task.action";
import ModalEditTask from "@/components/modal/modalEditTask";
import { useRouter } from "next/router";

export default function Task() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data_task } = useSelector((state) => state.task);

  function formatTanggalBulanTahun(inputDate) {
    const date = new Date(inputDate);

    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "July",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const tanggal = date.getDate();
    const bulan = months[date.getMonth()];
    const tahun = date.getFullYear();

    const tanggalBulanTahun = `${tanggal} ${bulan} ${tahun}`;

    return tanggalBulanTahun;
  }

  const selisihWaktu = (waktu) => {
    const tanggalDanWaktu = new Date(waktu);

    const waktuSaatIni = new Date();

    const selisih = waktuSaatIni - tanggalDanWaktu;

    if (selisih >= 24 * 60 * 60 * 1000) {
      const selisihHari = Math.floor(selisih / (24 * 60 * 60 * 1000));
      return `${selisihHari} day ago`;
    } else if (selisih >= 60 * 60 * 1000) {
      const selisihJam = Math.floor(selisih / (60 * 60 * 1000));
      return `${selisihJam} hour ago`;
    } else {
      const selisihMenit = Math.floor(selisih / (1000 * 60));
      return `${selisihMenit} minute ago`;
    }
  };

  const handleDelete = (id) => {
    const konfirmasi = confirm("Are you sure?");

    if (konfirmasi) {
      dispatch(deleteTaskById({ id }));
      dispatch(getTask());
    }
  };

  useEffect(() => {
    dispatch(getTask());
  }, []);

  return (
    <main className="min-h-screen">
      <button
        className="bg-sky-600 p-3 rounded-md shadow-md text-xs text-white font-regular"
        onClick={() => document.getElementById("modal-task").showModal()}
      >
        Add Task
      </button>
      <ModalTask />
      <section className="text-sky-800">
        <h2 className="text-sky-800 my-3 font-semibold">Task terupdate</h2>
        <div className="flex gap-3 flex-wrap">
          {data_task.map((item, i) => (
            <div key={i} className="shadow-xl rounded-md w-full md:w-64 p-3">
              <div className="flex justify-between text-sky-900">
                <p className="bg-blue-300 p-2 rounded-md text-xs font-regular">
                  {selisihWaktu(item.reminder)}
                </p>
              </div>
              <p className="font-bold my-3">{item.title}</p>
              <div className="flex justify-between items-end">
                <div className="opacity-40">
                  <div className="flex gap-2 text-xs items-center text-slate-600">
                    <IconCalendarEvent />
                    <p>{formatTanggalBulanTahun(item.due_date)}</p>
                  </div>
                  <div className="flex gap-2 text-xs items-center text-slate-600">
                    <IconClockHour4 />
                    <p>{item.due_time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => router.push(`/task/${item.id}`)}
                    className="cursor-pointer text-black"
                  >
                    <IconClipboardText width={20} />
                  </div>
                  <div
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="text-red-600 cursor-pointer"
                  >
                    <IconTrash width={20} />
                  </div>
                  <div
                    onClick={() =>
                      document
                        .getElementById(`modal-edit-${item.id}`)
                        .showModal()
                    }
                    className="text-green-700 cursor-pointer"
                  >
                    <IconPencilMinus width={20} />
                  </div>
                  <ModalEditTask id={item.id} data={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "TASK" },
  };
}
