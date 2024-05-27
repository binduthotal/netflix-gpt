import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="md:-mt-56 bg-black">
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
      <MovieList
        title={"Tv Series - Arriving Today"}
        movies={movies.tvArrivingToday}
      />
      <MovieList title={"Tv Series - On The Air"} movies={movies.tvOnTheAir} />
      <MovieList title={"Tv - Popular Shows"} movies={movies.tvPopular} />
      <MovieList title={"Tv - Top Rated"} movies={movies.tvToRated} />
    </div>
  );
};

export default SecondaryContainer;
