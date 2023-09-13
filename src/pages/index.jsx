import { IconSearch } from "@tabler/icons-react";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";

const Home = () => {
  return (
    <main className="px-8">
      <header className="flex justify-between lg:flex-row lg:items-center">
        <div>
          <h1 className="text-primary lg:text-left">Halo, Selamat datang Jono</h1>
          <h5 className="text-slate-400 text-center lg:text-left">Good Morning</h5>
        </div>
        <div className="flex gap-3 items-center">
          <p>Agust 23,2023 4.30 PM</p>
          <IconBell color="#0B588D" />
          <img src="/static/auth/logo.png" className="w-[50px] m-auto"></img>
        </div>
      </header>
      <div className="flex w-full mx-auto my-4 p-2 rounded-md shadow-md">
        <input className="outline-none w-full" type="text" name="search" id="search" />
        <IconSearch />
      </div>
      <div className="flex gap-3 text-white lg:flex-row">
        <div className="p-8  bg-[#214A00] rounded-md w-full">
          <p className="text-center">0/0</p>
          <p>Propespect Added</p>
        </div>
        <div className="p-8  bg-[#18046A] rounded-md w-full">
          <p className="text-center">0/0</p>
          <p>Propespect Added</p>
        </div>
        <div className="p-8  bg-[#007383] rounded-md w-full">
          <p className="text-center">0/0</p>
          <p>Propespect Added</p>
        </div>
      </div>
      <div className="flex items-start gap-3 my-5 lg:flex-row">
        <div className="space-y-3 w-full">
          <h3 className="font-semibold">Event Terupdate</h3>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <h5 className="font-bold">Meeting Seminar</h5>
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-1 w-max rounded-md">
                <IconTrash color="#FFFFFF" />
              </div>
              <div className="bg-green-600 p-1 w-max rounded-md">
                <IconPencilMinus color="#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <h5 className="font-bold">Meeting Seminar</h5>
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-1 w-max rounded-md">
                <IconTrash color="#FFFFFF" />
              </div>
              <div className="bg-green-600 p-1 w-max rounded-md">
                <IconPencilMinus color="#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <h5 className="font-bold">Meeting Seminar</h5>
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-1 w-max rounded-md">
                <IconTrash color="#FFFFFF" />
              </div>
              <div className="bg-green-600 p-1 w-max rounded-md">
                <IconPencilMinus color="#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between items-center">
            <h5 className="font-bold">Meeting Seminar</h5>
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-1 w-max rounded-md">
                <IconTrash color="#FFFFFF" />
              </div>
              <div className="bg-green-600 p-1 w-max rounded-md">
                <IconPencilMinus color="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 w-full lg:w-1/2">
          <h3 className="font-semibold">Taks Terupdate</h3>
          <div className="shadow-md rounded-md p-3 flex justify-between item-center">
            <div>
              <h5>Hasil meeting pada sore hari ini adalah ....</h5>
              <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                <div> Contact Adinda {""} </div>
                <div className="bg-slate-400 text-[10px] px-2 py-1 rounded-full">
                  Reminder : 23/09/2023 04.00 PM
                </div>
              </div>
            </div>
            <div className="text-center">
              <h6 className="font-semibold">23</h6>
              <p className="text-xs">Agust</p>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between item-center">
            <div>
              <h5>Hasil meeting pada sore hari ini adalah ....</h5>
              <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                <div> Contact Adinda {""} </div>
                <div className="bg-slate-400 text-[10px] px-2 py-1 rounded-full">
                  Reminder : 23/09/2023 04.00 PM
                </div>
              </div>
            </div>
            <div className="text-center">
              <h6 className="font-semibold">23</h6>
              <p className="text-xs">Agust</p>
            </div>
          </div>
          <div className="shadow-md rounded-md p-3 flex justify-between item-center">
            <div>
              <h5>Hasil meeting pada sore hari ini adalah ....</h5>
              <div className="text-xs my-2 flex gap-2 items-center flex-wrap">
                <div> Contact Adinda {""} </div>
                <div className="bg-slate-400 text-[10px] px-2 py-1 rounded-full">
                  Reminder : 23/09/2023 04.00 PM
                </div>
              </div>
            </div>
            <div className="text-center">
              <h6 className="font-semibold">23</h6>
              <p className="text-xs">Agust</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
