import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import LoginBackgroundIm from "./LoginBackgroundIm";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="w-full h-full md:mb-2">
      <img
        src={BACKGROUND_IMG_URL}
        alt="BackGround"
        className="object-cover w-full sm:h-screen md:h-screen lg:h-full md:block hidden  "
      />
      <div className="bg-black">
        <Header />
        <Outlet />
      </div>
    </div>
  
);
};

export default Login;
