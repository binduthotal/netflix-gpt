import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TV_TOP_RATED, options } from "../utils/constants";
import { addTvTopRated } from "../utils/movieSlice";

const useTvTopRated = () => {

  const tvTopRated = useSelector((store) => store.movies.tvToRated);
  const dispatch = useDispatch();

  useEffect(() => {
    !tvTopRated && getTvTopRated();
  }, []);

  const getTvTopRated = async () => {
    const data = await fetch(TV_TOP_RATED, options);
    const json = await data.json();
    dispatch(addTvTopRated(json.results));
  };
};

export default useTvTopRated;
