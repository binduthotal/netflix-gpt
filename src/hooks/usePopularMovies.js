import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { POPULAR_MOVIES_API, options } from "../utils/constants";

const usePopularMovies = () => {

    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES_API, options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };
};

export default usePopularMovies;
