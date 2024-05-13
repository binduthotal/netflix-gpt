import { NOWPLAYING_API, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOWPLAYING_API, options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

};

export default useNowPlayingMovies;
