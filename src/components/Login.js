import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import LoginBackgroundIm from "./LoginBackgroundIm";

const Login = () => {
    return (
        <div className="">
            <LoginBackgroundIm/>
            <Header />
            <Outlet />
        </div>
    );
};

export default Login;
