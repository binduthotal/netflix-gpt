import React from "react";
import { BACKGROUND_IMG_URL } from "../utils/constants";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langValue = useSelector((store) => store.lang.showLang);

    return (
      <div className="flex justify-center">
        <div className="absolute -z-10 w-screen h-screen">
          <img
            src={BACKGROUND_IMG_URL}
            alt="BackGround"
            className="object-cover w-full h-full "
          />
        </div>
        <form
          className="mt-[9%] text-center bg-black w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={lang[langValue].placeHolder}
            className="p-3 m-4 mr-2 col-span-10"
          />
          <button className="col-span-2 bg-red-700 text-white mx-2 m-4  font-medium text-lg">
            {lang[langValue].search}
          </button>
        </form>
      </div>
    );
};

export default GptSearchBar;
