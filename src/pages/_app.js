import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/globals.scss";
import { useRouter } from "next/dist/client/router";
import { useWindowSize } from "../../helper/helper";
import Header from "@/components/Header";
import { createWrapper } from "next-redux-wrapper";
import store from "../../store/store";
import { Provider } from "react-redux";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const App = (data) => {
  const { Component, props } = data;
  const router = useRouter();
  const size = useWindowSize();
  const mobile = size.width < '992';
  const [token, set_token] = useState(null);

  useEffect(() => {
    check();
  }, [router.pathname])

  
  const check = async () => {
    try {
      const tokens = getCookie('access_token') || null
      set_token(tokens)
      if (tokens) {
        if (router.pathname === '/login') return router.push('/dashboard')
      } else {
        if (router.pathname === '/signup') return router.push('/signup')
        return router.push('/login')
      }
    } catch (e) {
      deleteCookie('token');
    }
    
  }

  return (
    <div className="min-h-screen bg-second">
      {!token ? (
        <div className="">
          <div>
            <Component {...props.pageProps} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <div className={`p-[20px] ${!mobile && 'ml-[235px]'} pt-[100px]`}>
            {!mobile &&
              <Header data={...props.pageProps} />
            }
            <Component {...props.pageProps} />
          </div>
        </div>
      )}
    </div>
  );
}
const myApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <App Component={Component} props={props} />
      </Provider>
    </>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(myApp);
// export default myApp;