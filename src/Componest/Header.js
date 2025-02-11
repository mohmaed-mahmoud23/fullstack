import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log("use heder", user);
  return (
    <header className="   h-16  shadow-md  bg-white">
      <div className="container  flex   items-center   h-full px-4  max-auto  justify-between  ">
        <div>
          <Link to="/">
            {" "}
            <Logo w={90} h={50} />{" "}
          </Link>
        </div>

        <div className="      flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder=" serch prodact ....  "
            className=" w-full outline-none  "
          ></input>
          <div className="    text-lg max-w[100px] h-8 bg-red-600  flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className=" text-2xl cursor-pointer flex items-center gap-7">
          {user?.profilePic ? <img src={user?.profilePic} /> : <FaRegUser />}

          <div className=" text-3xl cursor-pointer  relative">
            <span>
              <CiShoppingCart />
            </span>
            <div className="bg-red-500 h-5 rounded-full w-5 p-1 flex items-center    absolute -top-2 right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link to="/Login">
              <button className=" px-3 py-1 rounded-full text-white hover:bg-red-700  bg-red-500 ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
