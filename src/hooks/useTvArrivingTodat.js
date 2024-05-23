import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TV_ARRIVING_TODAY, options } from "../utils/constants";
import { addTvArrivingToday } from "../utils/movieSlice";

const useTvArrivingTodat = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getTvArrivingToday();
    }, []);

    const getTvArrivingToday = async () => {
        const data = await fetch(TV_ARRIVING_TODAY, options);
        const json = await data.json();
        dispatch(addTvArrivingToday(json.results));
    };
};

export default useTvArrivingTodat;
