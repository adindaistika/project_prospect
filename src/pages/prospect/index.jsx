import { IconSearch } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";

export default function prospect() {
    return (
      <main className=" min-h-screen">
        <div className="flex w-full mx-auto my-4 p-2 rounded-md shadow-md">
          <input
            className="outline-none w-full"
            type="text"
            name="search"
            id="search"
          />
          <IconSearch />
        </div>
        <div className="flex gap-5 flex-col justify-between items-center">
          <div className="w-full md:w-1/2">
            <button
              className="flex shadow-md w-full justify-between rounded-md opacity-80 p-3"
              type="button" >
              <IconAddressBook />
              <p>All Contact</p>
              <IconSquareRoundedChevronRight />
            </button>
          </div>
          <select
            className="bg-sky-600 p-2 rounded-md outline-none w-full sm:w-40 text-white"
            name="filter"
            id="filter"
          >
            <option className="bg-white text-sky-600" selected>
              Filter
            </option>
            <option className="bg-white text-sky-600" value="Prospect">
              Prospect
            </option>
            <option className="bg-white text-sky-600" value="Hot Leads">
              Hot Leads
            </option>
            <option className="bg-white text-sky-600" value="Actively Selling">
              Actively Selling
            </option>
            <option className="bg-white text-sky-600" value="Actively Followup">
              Actively Followup
            </option>
            <option className="bg-white text-sky-600" value="Won">
              Won
            </option>
            <option className="bg-white text-sky-600" value="Lost">
              Lost
            </option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img src="/static/auth/profile.jpeg" className="w-[60px] mb-3 rounded-full" ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                {" "}
                Company ----{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                {" "}
                Company ----{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                {" "}
                Company ----{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                Company ----
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                Company ----
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                Company ----
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                {" "}
                Company ----{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md shadow-md">
            <img
              src="/static/auth/profile.jpeg"
              className="w-[60px] mb-3 rounded-full"
            ></img>
            <div>
              <p className="font-semibold">Adinda Istika Maulia</p>
              <p className="text-xs font-semibold text-slate-400">
                {" "}
                Company ----{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
};

export async function getServerSideProps() {
    return {
      props: {title: 'PROSPECT'},
    };
  }