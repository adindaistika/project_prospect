import { IconBell } from "@tabler/icons-react";
import Image from "next/image";

const Header = (props) => {
  const { data } = props;
  return (
    <header className="fixed z-50 top-0 right-0 left-[235px] flex flex-col sm:flex-row justify-between lg:items-center bg-white p-[20px]">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-black lg:text-left font-semibold">{data.title}</h1>
      </div>
      <div className="flex gap-3 items-center">
        <IconBell color="#0B588D" />
        <img
          src="/static/auth/profile.jpeg"
          className="w-[50px] m-auto rounded-full"
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
