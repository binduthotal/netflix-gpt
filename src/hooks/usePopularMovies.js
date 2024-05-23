import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { POPULAR_MOVIES_API, options } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES_API, options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };
};

export default usePopularMovies;
