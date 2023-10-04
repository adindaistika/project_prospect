import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="home-banner flex flex-col w-full mx-auto my-4 p-10 rounded-md shadow-md bg-sky-600">
        <h1 className="text-white lg:text-left font-bold text-">Halo, Selamat datang Jono</h1>
        <h5 className="text-white text-center sm:text-left mt-2">Good Morning</h5>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 text-white">
        <div className="rectangle1-banner p-8 bg-[#214A00] rounded-md flex-1">
          <p className="text-center">0/0</p>
          <p className="text-center">Prospect Added</p>
        </div>
        <div className="rectangle2-banner p-8 bg-[#18046A] rounded-md flex-1">
          <p className="text-center">0/0</p>
          <p className="text-center">Prospect Added</p>
        </div>
        <div className="rectangle3-banner p-8 bg-[#007383] rounded-md flex-1">
          <p className="text-center">0/0</p>
          <p className="text-center">Prospect Added</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-start my-5">
        <div className="space-y-3 w-full sm:w-1/2">
          <h3 className="font-semibold text-[10px] md:text-[24px]">Event Terupdate</h3>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="font-bold text-[10px] md:text-[18px]">
                Meeting Seminar
              </h5>
              <p className="text-xs">28 Agustus 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-transparent  w-max">
                <IconTrash color="red" />
              </div>
              <div className="bg-transparent p-1 w-max">
                <IconPencilMinus color="green" />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="font-bold text-[10px] md:text-[18px]">
                Meeting Seminar
              </h5>
              <p className="text-xs">28 Agustus 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-transparent p-1 w-max">
                <IconTrash color="red" />
              </div>
              <div className="bg-transparent p-1 w-max">
                <IconPencilMinus color="green" />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="font-bold text-[10px] md:text-[18px]">
                Meeting Seminar
              </h5>
              <p className="text-xs">28 Agustus 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-transparent p-1 w-max">
                <IconTrash color="red" />
              </div>
              <div className="bg-transparent p-1 w-max">
                <IconPencilMinus color="green" />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="font-bold text-[10px] md:text-[18px]">
                Meeting Seminar
              </h5>
              <p className="text-xs">28 Agustus 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-transparent p-1 w-max">
                <IconTrash color="red" />
              </div>
              <div className="bg-transparent p-1 w-max">
                <IconPencilMinus color="green" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 w-full sm:w-1/2">
          <h3 className="font-semibold text-[10px] md:text-[24px]">Tasks Terupdate</h3>
          <div className="bg-sky-100 shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="text-[10px] md:text-[18px]">Hasil meeting pada sore hari ini adalah ....</h5>
              <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                <div> Contact Adinda {""} </div>
                <div className="bg-slate-400 text-[10px] px-2 py-1 rounded-full">
                  Reminder : 23/09/2023 04.00 PM
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="text-[10px] md:text-[18px]">Hasil meeting pada sore hari ini adalah ....</h5>
              <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                <div> Contact Adinda {""} </div>
                <div className="bg-slate-400 text-[10px] px-2 py-1 rounded-full">
                  Reminder : 23/09/2023 04.00 PM
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <div>
              <h5 className="text-[10px] md:text-[18px]">Hasil meeting pada sore hari ini adalah ....</h5>
              <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                <div> Contact Adinda {""} </div>
                <div className="bg-slate-400 text-[10px] px-2 py-1 rounded-full">
                  Reminder : 23/09/2023 04.00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  return {
    props: {title: 'DASHBOARD'},
  };
}
