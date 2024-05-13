import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {

  useNowPlayingMovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
       * Main Container
       *    - Video BackGround
       *    - Video Title
       *    -Secondary Container
       *
       */}
    </div>
  );
};

export default Browser;
