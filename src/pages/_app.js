import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/globals.scss";
import { useRouter } from "next/dist/client/router";
import { useWindowSize } from "../../helper/helper";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const size = useWindowSize();
  const mobile = size.width < '992';

  return (
    <div className="min-h-screen bg-second">
      {router.pathname === "/login" ? (
        <div className="">
          <div className="p-[20px] pt-[100px]">
            <Component {...pageProps} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <div className={`p-[20px] ${!mobile && 'ml-[235px]'} pt-[100px]`}>
            {!mobile &&
              <Header data={pageProps} />
            }
            <Component {...pageProps} />
          </div>
        </div>
      )}
    </div>
  );
}
