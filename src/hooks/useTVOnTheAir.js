import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TV_ON_THE_AIR, options } from "../utils/constants";
import { addTvOnTheAir } from "../utils/movieSlice";

const useTVOnTheAir = () => {

  const tvOnAir = useSelector((store) => store.movies.tvOnTheAir);
  const dispatch = useDispatch();

  useEffect(() => {
      !tvOnAir && getTvOnTheAir();
  }, []);

  const getTvOnTheAir = async () => {
    const data = await fetch(TV_ON_THE_AIR, options);
    const json = await data.json();
    dispatch(addTvOnTheAir(json.results));
  };
};

export default useTVOnTheAir;
