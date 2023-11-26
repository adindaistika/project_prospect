import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventComming,
  getGoal,
  getTaskTerupdate,
} from "../../store/reducers/dashboard/dashboard.action";
import { getCookie } from "cookies-next";

export default function Home() {
  const dispatch = useDispatch();
  const { data_event_terupdate } = useSelector((state) => state.dashboard);
  const { data_event_comming } = useSelector((state) => state.dashboard);
  const { data_event_goal } = useSelector((state) => state.dashboard);

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

  useEffect(() => {
    dispatch(getTaskTerupdate());
    dispatch(getEventComming());
    dispatch(getGoal());
  }, []);

  return (
    <main className="min-h-screen">
      <div className="home-banner flex flex-col w-full mx-auto my-4 p-10 rounded-md shadow-md bg-sky-600">
        <h1 className="text-white lg:text-left font-bold text-">
          Halo, Selamat datang <span>{getCookie("fullname")}</span>
        </h1>
        <h5 className="text-white sm:text-left mt-2">Good Morning</h5>
      </div>
      {data_event_goal.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3 text-white">
          <div className="rectangle1-banner p-8 bg-[#214A00] rounded-md flex-1">
            <p className="text-center">
              {data_event_goal[0].count}/{data_event_goal[0].total}
            </p>
            <p className="text-center">Prospect {data_event_goal[0].name}</p>
          </div>
          <div className="rectangle2-banner p-8 bg-[#18046A] rounded-md flex-1">
            <p className="text-center">
              {data_event_goal[1].count}/{data_event_goal[1].total}
            </p>
            <p className="text-center">Prospect {data_event_goal[1].name}</p>
          </div>
          <div className="rectangle3-banner p-8 bg-[#007383] rounded-md flex-1">
            <p className="text-center">
              {data_event_goal[2].count}/{data_event_goal[2].total}
            </p>
            <p className="text-center">Prospect {data_event_goal[2].name}</p>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 items-start my-5">
        <div className="space-y-3 w-full sm:w-1/2">
          <h3 className="font-semibold text-[10px] md:text-[24px]">
            Event Terupdate
          </h3>
          {data_event_comming.length > 0 ? (
            data_event_comming.map((item, i) => (
              <div
                key={i}
                className="shadow-md rounded-md p-3 flex justify-between items-center"
              >
                <div>
                  <h5 className="font-bold text-[10px] md:text-[18px]">
                    {item.name}
                  </h5>
                  <p className="text-xs">
                    {formatTanggalBulanTahun(item.date)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h5 className="mt-7 font-semibold">Data sedang kosong...</h5>
          )}
        </div>
        <div className="space-y-3 w-full sm:w-1/2">
          <h3 className="font-semibold text-[10px] md:text-[24px]">
            Tasks Terupdate
          </h3>
          {data_event_terupdate.length > 0 ? (
            data_event_terupdate.map((item, i) => (
              <div className="hover:bg-sky-100 shadow-md rounded-md p-3 flex justify-between items-center">
                <div>
                  <h5 className="text-[10px] font-bold md:text-[18px]">
                    {item.title}
                  </h5>
                  <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                    <div> Contact {item.full_name} </div>
                    <div className="bg-slate-300 text-[10px] px-2 py-1 rounded-full">
                      Reminder : {item.reminder}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="mt-7 font-semibold">Data sedang kosong...</h5>
          )}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "DASHBOARD" },
  };
}
