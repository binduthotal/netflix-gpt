import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute pt-[20%] pl-20 w-1/3 grid gap-6 text-white">
            <h1 className="font-extrabold text-5xl text-wrap">{title}</h1>
            <div className="flex ">
                <button className="mr-5 px-9 py-2 font-semibold text-black text-lg bg-white rounded-lg">
                    Play
                </button>
                <button className="px-9 py-2 font-semibold text-white text-lg bg-gray-400 bg-opacity-25 rounded-lg">
                    More info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
