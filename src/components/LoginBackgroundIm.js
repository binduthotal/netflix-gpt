import React from "react";
import { useSelector } from "react-redux";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const LoginBackgroundIm = () => {
  const user = useSelector((store) => store.user);
  return (
    user === null && (
      <div className="absolute top-0 w-full h-full">
        <img
          src={BACKGROUND_IMG_URL}
          alt="BackGround"
          className="object-cover w-full h-full"
        />
      </div>
    )
  );
};

export default LoginBackgroundIm;
