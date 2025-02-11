import { Outlet } from "react-router-dom";
import Header from "./Componest/Header";
import Footer from "./Componest/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import summryapi from "./Common/indedx";
import Context from "./context/inedx";
import { useDispatch, useSelector } from "react-redux";
import { setuserdetails } from "./store/userslice";

const App = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log("use heder", user);
  const disbatch = useDispatch();
  const fetchuserdetails = async () => {
    const dataResponse = await fetch(summryapi.current_user.url, {
      method: summryapi.current_user.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      disbatch(setuserdetails(dataApi.data));
    }
    console.log("data-user", dataResponse);
  };
  useEffect(() => {
    fetchuserdetails();
  }, []);
  return (
    <>
      <Context.Provider 
        value={{
          fetchuserdetails
        }}
      >
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
