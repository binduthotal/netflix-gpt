import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTvArrivingTodat from "../hooks/useTvArrivingTodat";
import useTVOnTheAir from "../hooks/useTVOnTheAir";
import useTvPopular from "../hooks/useTvPopular";
import useTvTopRated from "../hooks/useTvTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {

  const toggleGpt = useSelector((store) => store.gptSearch.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()
  useTvArrivingTodat();
  useTvPopular();
  useTvTopRated();
  useTVOnTheAir();

  return (
    <div>
      <Header />
      {toggleGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
