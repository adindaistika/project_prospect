import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/globals.scss";
import { useRouter } from "next/dist/client/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="h-screen bg-second">
      {router.pathname === "/login" ? (
        <div className="">
          <div className="p-[20px] pt-[100px]">
            <Component {...pageProps} />
          </div>
        </div>
      ) : (
        <div className="flex gap-3 h-screen">
          <Navbar />
          <div className="p-[20px] overflow-y-scroll w-full text-black">
            <Component {...pageProps} />
          </div>
        </div>
      )}
    </div>
  );
}
