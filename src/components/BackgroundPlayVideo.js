import React from "react";
import useGetVideoById from "../hooks/useGetVideoById";
import { useSelector } from "react-redux";

const BackgroundPlayVideo = ({ movieId }) => {
  useGetVideoById(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className=" w-full overflow-hidden">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?rel=0&autoplay=1&controls=0&mute=1&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundPlayVideo;
