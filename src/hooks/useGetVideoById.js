import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useGetVideoById = (movieId) => {

    const dispatch = useDispatch()
    useEffect(()=>{
        getTrailerVideo()
    },[]);

    const getTrailerVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options)
        const json = await data.json()
        const filteredData = json.results.filter(data => data.type === "Trailer")
        const trailer = filteredData.length?filteredData[0]:json.results[0];
        dispatch(addMovieTrailer(trailer));
    }
}

export default useGetVideoById;