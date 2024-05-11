import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="absolute bg-gradient-to-br from-black w-full h-full top-0 left-0 ">
        <div className="flex justify-between mx-28  items-center">
          <a href="/">
            <img
              className="w-48 "
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            />
          </a>
          <div>
            <Link to="/login">
              <button className="bg-red-600 rounded-lg text-white px-3 py-1 font-semibold">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Header;
