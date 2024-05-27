import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptsearchSuggestions from "./GptsearchSuggestions";

const GptSearch = () => {
    return (
        <div className="mb-10">
            <GptSearchBar />
            <GptsearchSuggestions />
        </div>
    );
};

export default GptSearch;
