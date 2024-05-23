import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-9 lg:pt-28 lg:pl-14 w-full h-full  text-white md:pt-2 md:pl-5 sm:pt-2 sm:pl-5">
            <h1 className="font-bold lg:text-4xl md:text-3xl w-1/3">{title}</h1>
            <div className="flex mt-5">
                <button className="mr-5 px-9 py-2 font-semibold text-black text-lg bg-white rounded-lg hover:bg-gray-400">
                    Play
                </button>
                <button className="px-9 py-2 font-semibold text-white text-lg bg-gray-400 bg-opacity-25 rounded-lg hover:bg-gray-400">
                    More info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
