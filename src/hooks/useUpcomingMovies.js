import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPCOMING_MOVIES_API, options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
