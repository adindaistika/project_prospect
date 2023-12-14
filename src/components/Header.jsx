import { IconUserCircle } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { useRouter } from "next/router";

const Header = (props) => {
  const { data } = props;
  const router = useRouter();
  return (
    <header className="fixed z-50 top-0 right-0 left-[235px] flex flex-col sm:flex-row justify-between lg:items-center bg-white p-[20px]">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-black lg:text-left font-semibold">{data.title}</h1>
      </div>
      <div className="flex gap-3 items-center">
        <IconBell color="#0B588D" />
        <IconUserCircle
          onClick={() => router.push("/profile")}
          color={"#0B588D"}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
