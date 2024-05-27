import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TV_POPULAR, options } from "../utils/constants";
import { addTvPopular } from "../utils/movieSlice";

const useTvPopular = () => {

  const tvPopular = useSelector((store) => store.movies.tvPopular);
  const dispatch = useDispatch();

  useEffect(() => {
   !tvPopular &&  getTvPopular();
  }, []);

  const getTvPopular = async () => {
    const data = await fetch(TV_POPULAR, options);
    const json = await data.json();
    dispatch(addTvPopular(json.results));
  };
};

export default useTvPopular;
