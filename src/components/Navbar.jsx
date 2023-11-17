import { IconBell, IconClipboardText } from "@tabler/icons-react";
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
import Link from "next/link";
import { useWindowSize } from "../../helper/helper";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { deleteCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/reducers/auth/auth.action";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const size = useWindowSize();
  const mobile = size.width < "992";
  const [hiddenSide, setHiddenSide] = useState(true);
  const url = router.pathname.split("/")[1];
  console.log(router.pathname.split("/"));

  const handleSidebar = () => {
    setHiddenSide(!hiddenSide);
  };

  return (
    <div className="fixed z-10">
      {mobile && (
        <div className="flex items-center justify-between bg-[#fff] fixed w-full top-0 p-[20px]">
          <div onClick={() => handleSidebar()}>
            <IconMenu2></IconMenu2>
          </div>
          <div className="flex gap-3 items-center">
            <IconBell color="#0B588D" />
            <img
              src="../static/auth/profile.jpeg"
              className="w-[50px] m-auto rounded-full"
              alt="Logo"
            />
          </div>
        </div>
      )}
      {mobile && !hiddenSide && (
        <div
          onClick={() => handleSidebar()}
          className={`transition-all delay-300 duration-200 fixed w-full h-[100vh] ${hiddenSide && "bg-transparent"
            } ${mobile && !hiddenSide && " bg-[#232222a8]"}`}
        ></div>
      )}
      <div
        className={`transition-all duration-200 bg-white p-[30px] drop-shadow-xl space-y-3 h-[100vh] w-[235px] ${mobile && "fixed left-0"
          } ${mobile && hiddenSide && " left-[-235px]"}`}
      >
        <div>
          <img src="/static/auth/logo.png" className="w-[88px] m-auto"></img>
        </div>
        <div className="flex flex-col items-center gap-[10px] menu-sidebar overflow-y-auto pr-[2px]">
          <div
            className={`items-center p-2 w-full rounded-md ${url === "" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/"} className={`w-full flex flex-row`}>
              <IconHome2 color={url === "" ? "#FFFFFF" : "#0B588D"} />
              <div
                className={`ml-2 cursor-pointer ${url === "" ? "text-white" : "text-sky-800"
                  }`}
              >
                Dashboard
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${url === "contact" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/contactcategory"} className={`w-full flex flex-row`}>
              <IconUserCircle
                color={url === "contact" ? "#FFFFFF" : "#0B588D"}
              />
              <div
                className={`ml-2 cursor-pointer ${url === "contact" ? "text-white" : "text-sky-800"
                  }`}
              >
                Contact
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${url === "prospect" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/prospect"} className={`w-full flex flex-row`}>
              <IconUsersGroup
                color={url === "prospect" ? "#FFFFFF" : "#0B588D"}
              />
              <div
                className={`ml-2 cursor-pointer ${url === "prospect" ? "text-white" : "text-sky-800"
                  }`}
              >
                Prospect
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${url === "task" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/task"} className={`w-full flex flex-row`}>
              <IconClipboardText
                color={url === "task" ? "#FFFFFF" : "#0B588D"}
              />
              <div
                className={`ml-2 cursor-pointer ${url === "task" ? "text-white" : "text-sky-800"
                  }`}
              >
                Task
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${url === "events" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/events"} className={`w-full flex flex-row`}>
              <IconCalendarDue
                color={url === "events" ? "#FFFFFF" : "#0B588D"}
              />
              <div
                className={`ml-2 cursor-pointer ${url === "events" ? "text-white" : "text-sky-800"
                  }`}
              >
                Events
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${url === "tutorials" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/tutorials"} className={`w-full flex flex-row`}>
              <IconMovie color={url === "tutorials" ? "#FFFFFF" : "#0B588D"} />
              <div
                className={`ml-2 cursor-pointer ${url === "tutorials" ? "text-white" : "text-sky-800"
                  }`}
              >
                Tutorials
              </div>
            </Link>
          </div>
          {/* <div
            className={`items-center p-2 w-full rounded-md ${
              url === "/subscription" ? "bg-sky-600" : ""
            }`}
          >
            <Link href={"/subscription"} className={`w-full flex flex-row`}>
              <IconAddressBook
                color={
                  url === "/subscription" ? "#FFFFFF" : "#0B588D"
                }
              />
              <div
                className={`ml-2 cursor-pointer ${
                  url === "/subscription"
                    ? "text-white"
                    : "text-sky-800"
                }`}
              >
                Subscription
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${
              url === "/referrals" ? "bg-sky-600" : ""
            }`}
          >
            <Link href={"/referrals"} className={`w-full flex flex-row`}>
              <IconAffiliate
                color={url === "/referrals" ? "#FFFFFF" : "#0B588D"}
              />
              <div
                className={`ml-2 cursor-pointer ${
                  url === "/referrals"
                    ? "text-white"
                    : "text-sky-800"
                }`}
              >
                Referrals
              </div>
            </Link>
          </div> */}
          <div
            className={`items-center p-2 w-full rounded-md ${url === "feedback" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/feedback"} className={`w-full flex flex-row`}>
              <IconQuote color={url === "feedback" ? "#FFFFFFF" : "#0B588D"} />
              <div
                className={`ml-2 cursor-pointer ${url === "feedback" ? "text-white" : "text-sky-800"
                  }`}
              >
                Feedback
              </div>
            </Link>
          </div>
          <div
            className={`items-center p-2 w-full rounded-md ${url === "messagetemplate" ? "bg-sky-600" : ""
              }`}
          >
            <Link href={"/messagetemplate"} className={`w-full flex flex-row`}>
              <IconMessage
                color={url === "messagetemplate" ? "#FFFFFF" : "#0B588D"}
              />
              <div
                className={`ml-2 cursor-pointer ${url === "messagetemplate" ? "text-white" : "text-sky-800"
                  }`}
              >
                Messagetemplate
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`items-center p-2 w-full rounded-md ${url === "logout" ? "bg-sky-600" : ""
            }`}
        >
          <div
            onClick={() => {
              deleteCookie("access_token");
              deleteCookie("fullname");
              dispatch(logoutUser());
              router.push("/login");
            }}
            className={`w-full flex flex-row`}
          >
            <IconLogout color={url === "logout" ? "#FFFFFF" : "#0B588D"} />
            <div
              className={`ml-2 cursor-pointer ${url === "logout" ? "text-white" : "text-sky-800"
                }`}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;