import { IconClipboardText } from "@tabler/icons-react";
import { IconMovie } from "@tabler/icons-react";
import { IconAffiliate } from "@tabler/icons-react";
import { IconMessage } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";
import { IconQuote } from "@tabler/icons-react";
import { IconAddressBook } from "@tabler/icons-react";
import { IconCalendarDue } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconHome2 } from "@tabler/icons-react";
import { useRouter } from "next/router";
import Link from 'next/link';


const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-primary p-3 space-y-3 h-[100vh] w-[140px]">
      <div>
        <img src="/static/auth/profile.jpeg" className="w-[80px] h-[80px] object-cover m-auto mb-3 rounded-full"></img>
        <h1 className="text-center text-white font-semibold">JONO</h1>
      </div>
      <div className="flex flex-col items-center gap-4 menu-sidebar overflow-y-scroll">
        <Link href={'/'}>
          <div className={router.pathname === "/" && "bg-second p-2 w-max rounded-md"}>
            <IconHome2 color={router.pathname === "/" ? "#0B588D" : "#FFFFFF"} />
          </div>
        </Link>
        <Link href={'/contact'}>
          <div className={router.pathname === "/contact" && "bg-second p-2 w-max rounded-md"}>
            <IconUserCircle color={router.pathname === "/contact" ? "#0B588D" : "#FFFFFF"} />
          </div>
        </Link>
        <Link href={'/prospect'}>
          <div className={router.pathname === "/prospect" && "bg-second p-2 w-max rounded-md"}>
            <IconUsersGroup color={router.pathname === "/prospect" ? "#0B588D" : "#FFFFFF"} />
          </div>
        </Link>
        <div className="bg-second p-2 w-max rounded-md">
          <IconClipboardText color="#0B588D" />
        </div>
        <div className="bg-second p-2 w-max rounded-md">
          <IconCalendarDue color="#0B588D" />
        </div>
        <div className="bg-second p-2 w-max rounded-md">
          <IconMovie color="#0B588D" />
        </div>
        <div className="bg-second p-2 w-max rounded-md">
          <IconAddressBook color="#0B588D" />
        </div>
        <div className="bg-second p-2 w-max rounded-md">
          <IconAffiliate color="#0B588D" />
        </div>
        <div className="bg-second p-2 w-max rounded-md">
          <IconQuote color="#0B588D" />
        </div>
        <div className="bg-second p-2 w-max rounded-md">
          <IconMessage color="#0B588D" />
        </div>
      </div>
      <div className="p-2 w-max rounded-md m-auto">
        <IconLogout color="#fff" />
      </div>
    </div>
  );
};

export default Navbar;
