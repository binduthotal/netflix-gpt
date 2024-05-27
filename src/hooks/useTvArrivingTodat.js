import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TV_ARRIVING_TODAY, options } from "../utils/constants";
import { addTvArrivingToday } from "../utils/movieSlice";

const useTvArrivingTodat = () => {

    const tvArrivingToday = useSelector(
      (store) => store.movies.tvArrivingToday
    );
    const dispatch = useDispatch();

    useEffect(() => {
        !tvArrivingToday && getTvArrivingToday();
    }, []);

    const getTvArrivingToday = async () => {
        const data = await fetch(TV_ARRIVING_TODAY, options);
        const json = await data.json();
        dispatch(addTvArrivingToday(json.results));
    };
};

export default useTvArrivingTodat;
