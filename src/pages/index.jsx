import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventComming,
  getGoal,
  getTaskTerupdate,
} from "../../store/reducers/dashboard/dashboard.action";
import { getCookie } from "cookies-next";
import OverlayLoading from "@/components/OverlayLoading";

export default function Home() {
  const dispatch = useDispatch();
  const [busy, set_busy] = useState(false);
  const { data_event_terupdate, data_event_comming, data_event_goal } =
    useSelector((state) => state.dashboard);

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
    set_busy(true);
    dispatch(getTaskTerupdate());
    dispatch(getEventComming());
    dispatch(getGoal());

    set_busy(false);
  }, []);

  return (
    <>
      {!busy ? (
        <main className="min-h-screen">
          <div
            style={{
              background:
                "linear-gradient(180deg, #4097D7 0.19%, #216EA6 99.81%)",
              backgroundBlendMode: "multiply",
            }}
            className="home-banner relative overflow-hidden flex flex-col w-full mx-auto my-4 p-10 rounded-md shadow-md bg-sky-600"
          >
            <svg
              className="absolute top-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="910"
              height="164"
              viewBox="0 0 910 164"
              fill="none"
            >
              <path
                d="M25.0348 293.202C15.8981 293.037 7.81707 292.609 0.905789 291.988C8.70049 292.384 16.7501 292.789 25.0348 293.202C106.778 294.679 273.022 275.108 442.076 184.259C630.025 83.2555 602.524 5.86292 565.28 -20.2079C676.51 -40.5574 903.791 -60.269 923.074 23.6809C947.178 128.618 1008.9 296.507 894.055 314.035C804.941 327.635 292.494 306.52 25.0348 293.202Z"
                fill="white"
                fill-opacity="0.03"
              />
            </svg>
            <svg
              className="absolute z-10 top-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="756"
              height="164"
              viewBox="0 0 756 164"
              fill="none"
            >
              <path
                d="M19.9909 291.994C12.5053 291.614 5.90132 290.984 0.268439 290.18C6.63938 290.771 13.219 291.376 19.9909 291.994C86.9624 295.394 224.505 278.812 368.587 188.101C528.773 87.2498 510.809 6.06562 481.804 -21.9201C574.262 -40.5669 761.885 -55.9049 772.717 31.9174C786.258 141.695 826.918 317.857 731.664 333.483C657.75 345.609 238.613 311.953 19.9909 291.994Z"
                fill="white"
                fill-opacity="0.06"
              />
            </svg>
            <h1 className="text-white lg:text-left font-bold text-">
              Halo, Selamat datang <span>{getCookie("fullname")}</span>
            </h1>
            <h5 className="text-white sm:text-left mt-2">Good Morning</h5>
          </div>
          {data_event_goal.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3 text-white">
              <div className="rectangle1-banner relative overflow-hidden p-8 bg-[#214A00] rounded-md flex-1">
                <svg
                  className="absolute top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="295"
                  height="156"
                  viewBox="0 0 295 156"
                  fill="none"
                >
                  <path
                    d="M227.023 6.30894C230.316 -7.8325 272.136 -13.2208 292.634 -14.1472L388.338 117.011L-5.61768 275.939C23.587 262.032 79.4022 228.159 69.0262 203.928C56.0561 173.639 53.619 160.517 65.9852 150.097C78.3514 139.676 85.5295 145.4 110 128.5C134.471 111.6 133.027 74.912 150.358 64.4672C167.69 54.0224 191.407 55.3647 205.5 48C219.593 40.6354 222.907 23.9857 227.023 6.30894Z"
                    fill="white"
                    fill-opacity="0.03"
                  />
                </svg>
                <svg
                  className="absolute  z-10 top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="279"
                  height="156"
                  viewBox="0 0 279 156"
                  fill="none"
                >
                  <path
                    d="M233.023 15.3089C236.316 1.1675 278.136 -4.22077 298.634 -5.14724L394.338 126.011L0.382319 284.939C29.587 271.032 85.4022 237.159 75.0262 212.928C62.0561 182.639 59.619 169.517 71.9852 159.097C84.3514 148.676 91.5295 154.4 116 137.5C140.471 120.6 139.027 83.912 156.358 73.4672C173.69 63.0224 197.407 64.3647 211.5 57C225.593 49.6354 228.907 32.9857 233.023 15.3089Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                </svg>
                <p className="text-center">
                  <span className="font-bold text-2xl">
                    {data_event_goal[0].count_category}
                  </span>
                  /{data_event_goal[0].total_contact}
                </p>
                <p className="text-center">{data_event_goal[0].goal_name}</p>
              </div>
              <div className="rectangle2-banner relative overflow-hidden p-8 bg-[#18046A] rounded-md flex-1">
                <svg
                  className="absolute top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="295"
                  height="156"
                  viewBox="0 0 295 156"
                  fill="none"
                >
                  <path
                    d="M227.023 6.30894C230.316 -7.8325 272.136 -13.2208 292.634 -14.1472L388.338 117.011L-5.61768 275.939C23.587 262.032 79.4022 228.159 69.0262 203.928C56.0561 173.639 53.619 160.517 65.9852 150.097C78.3514 139.676 85.5295 145.4 110 128.5C134.471 111.6 133.027 74.912 150.358 64.4672C167.69 54.0224 191.407 55.3647 205.5 48C219.593 40.6354 222.907 23.9857 227.023 6.30894Z"
                    fill="white"
                    fill-opacity="0.03"
                  />
                </svg>
                <svg
                  className="absolute z-10 top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="279"
                  height="156"
                  viewBox="0 0 279 156"
                  fill="none"
                >
                  <path
                    d="M233.023 15.3089C236.316 1.1675 278.136 -4.22077 298.634 -5.14724L394.338 126.011L0.382319 284.939C29.587 271.032 85.4022 237.159 75.0262 212.928C62.0561 182.639 59.619 169.517 71.9852 159.097C84.3514 148.676 91.5295 154.4 116 137.5C140.471 120.6 139.027 83.912 156.358 73.4672C173.69 63.0224 197.407 64.3647 211.5 57C225.593 49.6354 228.907 32.9857 233.023 15.3089Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                </svg>
                <p className="text-center">
                  <span className="font-bold text-2xl">
                    {data_event_goal[1].total_message_template}
                  </span>
                  /{data_event_goal[1].total_message_template}
                </p>
                <p className="text-center">{data_event_goal[1].goal_name}</p>
              </div>
              <div className="rectangle3-banner relative overflow-hidden p-8 bg-[#007383] rounded-md flex-1">
                <svg
                  className="absolute top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="295"
                  height="156"
                  viewBox="0 0 295 156"
                  fill="none"
                >
                  <path
                    d="M227.023 6.30894C230.316 -7.8325 272.136 -13.2208 292.634 -14.1472L388.338 117.011L-5.61768 275.939C23.587 262.032 79.4022 228.159 69.0262 203.928C56.0561 173.639 53.619 160.517 65.9852 150.097C78.3514 139.676 85.5295 145.4 110 128.5C134.471 111.6 133.027 74.912 150.358 64.4672C167.69 54.0224 191.407 55.3647 205.5 48C219.593 40.6354 222.907 23.9857 227.023 6.30894Z"
                    fill="white"
                    fill-opacity="0.03"
                  />
                </svg>
                <svg
                  className="absolute z-10 top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="279"
                  height="156"
                  viewBox="0 0 279 156"
                  fill="none"
                >
                  <path
                    d="M233.023 15.3089C236.316 1.1675 278.136 -4.22077 298.634 -5.14724L394.338 126.011L0.382319 284.939C29.587 271.032 85.4022 237.159 75.0262 212.928C62.0561 182.639 59.619 169.517 71.9852 159.097C84.3514 148.676 91.5295 154.4 116 137.5C140.471 120.6 139.027 83.912 156.358 73.4672C173.69 63.0224 197.407 64.3647 211.5 57C225.593 49.6354 228.907 32.9857 233.023 15.3089Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                </svg>
                <p className="text-center">
                  <span className="font-bold text-2xl">
                    {data_event_goal[2].count_complited_task}
                  </span>
                  /{data_event_goal[2].total_task}
                </p>
                <p className="text-center">{data_event_goal[2].goal_name}</p>
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 items-start my-5">
            <div className=" rounded-lg overflow-hidden bg-white shadow-sm w-full sm:w-1/2">
              <h3 className="font-semibold p-3 border-b-2 border-slate-100 text-[10px] md:text-[24px]">
                Event Terupdate
              </h3>
              {data_event_comming.length > 0 ? (
                data_event_comming.map((item, i) => (
                  <div
                    key={i}
                    className="border-b-2 border-slate-100 p-3 flex justify-between items-center"
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
                <div className="w-full h-full grid place-items-center">
                  <h5 className="mt-7 flex items-center gap-3 font-semibold">
                    <span className="loading loading-spinner loading-lg"></span>{" "}
                    Data sedang kosong...
                  </h5>
                </div>
              )}
            </div>
            <div className=" rounded-lg overflow-hidden  bg-white w-full sm:w-1/2">
              <h3 className="font-semibold p-3 border-b-2 border-slate-100 shadow-sm text-[10px] md:text-[24px]">
                Tasks Terupdate
              </h3>
              {data_event_terupdate.length > 0 ? (
                data_event_terupdate.map((item, i) => (
                  <div
                    key={i}
                    className="hover:bg-sky-100 border-b-2 border-slate-100 p-3 flex justify-between items-center"
                  >
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
                <div className="w-full h-full grid place-items-center">
                  <h5 className="mt-7 flex items-center gap-3 font-semibold">
                    <span className="loading loading-spinner loading-lg"></span>{" "}
                    Data sedang kosong...
                  </h5>
                </div>
              )}
            </div>
          </div>
        </main>
      ) : (
        <OverlayLoading />
      )}
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "DASHBOARD" },
  };
}
