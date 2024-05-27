import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptsearchSuggestions = () => {
    const { movieNames, movieResults } = useSelector((store) => store.gptSearch);

    if (!movieNames || !movieResults) return null;

    return (
        <div className="m-5 mt-[5%] bg-black bg-opacity-85 pb-10 ">
            {movieNames.map((movie, index) => (
                <MovieList title={movie} movies={movieResults[index]} />
            ))}
        </div>
    );
};

export default GptsearchSuggestions;
