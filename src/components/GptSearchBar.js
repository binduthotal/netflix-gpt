import React, { useRef } from "react";
import { BACKGROUND_IMG_URL, options } from "../utils/constants";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import genAI from "../utils/geminiai";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const langValue = useSelector((store) => store.lang.showLang);

  const SearchTmdbMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie names for the query :" +
      searchText.current.value +
      ", give only 5 movie names, comma seperated";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    if (!text) return null;
    // const text = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const geminiMovieResults = text.split(",");
    const promiseArray = geminiMovieResults.map((movie) => SearchTmdbMovies(movie));
    const tmdbMovieResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResults({movieNames:geminiMovieResults,movieResults:tmdbMovieResults}))
  };

  return (
    <div className="flex justify-center">
      <div className="fixed -z-10 w-screen h-screen">
        <img
          src={BACKGROUND_IMG_URL}
          alt="BackGround"
          className="object-cover w-full h-full "
        />
      </div>
      <form
        className="mt-[9%] text-center bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langValue].placeHolder}
          className="p-3 m-4 mr-2 col-span-10"
        />
        <button
          className="col-span-2 bg-red-700 text-white mx-2 m-4  font-medium text-lg"
          onClick={handleGptSearch}
        >
          {lang[langValue].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
