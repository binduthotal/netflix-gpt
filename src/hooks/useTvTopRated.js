import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TV_TOP_RATED, options } from "../utils/constants";
import { addTvTopRated } from "../utils/movieSlice";

const useTvTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTvTopRated();
  }, []);

  const getTvTopRated = async () => {
    const data = await fetch(TV_TOP_RATED, options);
    const json = await data.json();
    dispatch(addTvTopRated(json.results));
  };
};

export default useTvTopRated;
