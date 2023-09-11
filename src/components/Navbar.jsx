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


const Navbar = () => {
  return (
    <nav className="bg-primary p-3 space-y-3">
      <div>
        <img src="/static/auth/profile.jpeg" className="w-[90px] mb-3 rounded-full"></img>
        <h1 className="text-center text-white font-semibold">JONO</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-second p-2 w-max rounded-md">
          <IconHome2 color="#0B588D" />
        </div>
        <IconUserCircle color="#ffffff"/>
        <IconUsersGroup color="#ffffff"/>
        <IconClipboardText color="#ffffff"/>
        <IconCalendarDue color="#ffffff"/>
        <IconMovie color="#ffffff" />
        <IconAddressBook color="#ffffff" />
        <IconAffiliate color="#ffffff"/>
        <IconQuote color="#ffffff" />
        <IconMessage color="#ffffff"/>
        <IconLogout color="#ffffff"/>
      </div>
    </nav>
  );
};

export default Navbar;
