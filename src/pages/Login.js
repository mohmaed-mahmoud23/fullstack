import React, { useContext, useState } from "react";
import logininons from "../assest//signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import summryapi from "../Common/indedx";
import { toast } from "react-toastify";
import Context from "../context/inedx";
const Login = () => {
  const [showpassword, Setshowpassword] = useState(true);
  const [data, Setdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchuserdetails } = useContext(Context);

  const hanedleonchange = (e) => {
    const { name, value } = e.target;
    Setdata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  console.log("datalogin ", data);

  const handelsupmit = async (e) => {
    e.preventDefault();

    const dataRespons = await fetch(summryapi.signIn.url, {
      method: summryapi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataapi = await dataRespons.json();

    if (dataapi.success) {
      toast.success(dataapi.message);
      navigate("/");
      fetchuserdetails();
    }
    if (dataapi.error) {
      toast.error(dataapi.message);
    }
  };
  return (
    <div className=" mx-auto   p-5">
      <div className=" bg-white max-w-lg mx-auto     shadow-2xl ">
        <div className=" w-20  h-30 mx-auto  rounded-full py-4">
          <img src={logininons} alt="login" />
        </div>
        <form className=" p-10 flex flex-col gap-5" onSubmit={handelsupmit}>
          <div className=" grid">
            <label className="  font- font-thin">Email :</label>
            <div className=" bg-slate-100 p-2">
              <input
                type="email"
                placeholder="enter email "
                value={data.email}
                onChange={hanedleonchange}
                className=" w-full  h-full outline-none  bg-transparent"
                name="email"
              />
            </div>
          </div>

          <div>
            <label className="  font- font-thin">password :</label>
            <div className=" bg-slate-100 p-2 flex items-center">
              <input
                type={showpassword ? "text" : "password"}
                placeholder="enter password"
                onChange={hanedleonchange}
                value={data.password}
                name="password"
                className=" w-full  h-full outline-none bg-transparent"
              />
              <div className=" cursor-pointer">
                <span onClick={() => Setshowpassword((preve) => !preve)}>
                  {showpassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <Link
              to="/Forgotpassword"
              className="block w-fit ml-auto hover:underline mt-1 hover:text-red-700 mr-1"
            >
              forgot password ?
            </Link>
          </div>

          <button
            className="bg-red-600 text-white  mb-0 px-10 rounded-full  hover:bg-red-700 py-2 max-w-[180px] mx-auto block   hover:scale-110 mt-4 transition-all 2s"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className=" px-10 pb-1 text-red-500 ">
          Don't have an account?
          <Link
            to="/singup"
            className="hover:text-red-900 hover:border-b-black hover:underline"
          >
            <span className="ml-1">Signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
