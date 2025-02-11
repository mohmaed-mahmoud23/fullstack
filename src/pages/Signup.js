import React, { useState } from "react";
import logininons from "../assest//signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Imagestobase64 from "../helpers/Imagestobase64";
import summryapi from "../Common/indedx";
import { toast } from "react-toastify";

const Singup = () => {
  const [showpassword, Setshowpassword] = useState(true);
  const [showconfirmpassword, Setshowconfirmpassword] = useState(false);

  const [data, Setdata] = useState({
    email: "",
    password: "",
    name: "",
    showconfirmpassword: "",
    profilePic: "",
  }); 

  const navigat = useNavigate();
  //  // /// // // // // / /
  const handelprofil = async (e) => {
    const file = e.target.files[0];

    const profil = await Imagestobase64(file);
    Setdata((preve) => {
      // eslint-disable-next-line no-undef
      return { ...preve, profil: profil };
    });
  };

  const hanedleonchange = (e) => {
    const { name, value } = e.target;
    Setdata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handelsupmit = async (e) => {
    e.preventDefault();

    if (data.password === data.showconfirmpassword) {
      const dataresponse = await fetch(summryapi.signup.url, {
        method: summryapi.signup.method,
        headers: { "content-type": "application/json" }, // تصحيح الخطأ هنا
        body: JSON.stringify(data),
      });

      const responseData = await dataresponse.json(); // استخدام اسم مختلف هنا

      if (responseData.success) {
        toast.success(responseData.message);
        navigat("/login");
      }

      if (responseData.error) {
        toast.error(responseData.message);
      }
      console.log("responseData:", responseData);
    } else {
      console.log("Please check password and confirm password");
    }
  };

  return (
    <div className=" mx-auto   p-5">
      <div className=" bg-white max-w-lg mx-auto   shadow-2xl ">
        <div className=" w-20  h-30 mx-auto  rounded-full py-4 relative overflow-hidden">
          <div>
            <img src={data.profil || logininons} alt="login" />
          </div>
          <form>
            <label>
              <div className="text-xs bg-opacity-70 bg-slate-200  absolute pt-1  bottom-8 w-full  rounded-full cursor-pointer">
                Upload photo
              </div>
              <input
                type="file"
                className=" hidden"
                onChange={handelprofil}
              ></input>
            </label>
          </form>
        </div>
        <form className=" p-10 flex flex-col gap-1 " onClick={handelsupmit}>
          <div className=" grid">
            <label className="  font- font-thin">name :</label>
            <div className=" bg-slate-100 p-2">
              <input
                type="text"
                placeholder="enter your name "
                value={data.name}
                onChange={hanedleonchange}
                required
                className=" w-full  h-full outline-none  bg-transparent"
                name="name"
              />
            </div>
          </div>
          <div className=" grid">
            <label className="  font- font-thin">Email :</label>
            <div className=" bg-slate-100 p-2">
              <input
                type="email"
                placeholder="enter  email "
                value={data.email}
                onChange={hanedleonchange}
                required
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
                required
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
          </div>

          <div>
            <label className="  font- font-thin">confirm password :</label>
            <div className=" bg-slate-100 p-2 flex items-center">
              <input
                type={showconfirmpassword ? "text" : "password"}
                placeholder="enter password"
                onChange={hanedleonchange}
                required
                value={data.showconfirmpassword}
                name="showconfirmpassword"
                className=" w-full  h-full outline-none bg-transparent"
              />
              <div className=" cursor-pointer">
                <span onClick={() => Setshowconfirmpassword((preve) => !preve)}>
                  {showconfirmpassword ? <FaEye /> : <FaEyeSlash />}
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
            Signup
          </button>
        </form>
        <p className=" px-10 pb-1 text-red-500 ">
          Already have an account?
          <Link
            to="/Login"
            className="hover:text-red-900 hover:border-b-black hover:underline"
          >
            <span className="ml-1">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
