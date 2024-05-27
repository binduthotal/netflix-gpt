import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state,action) => {
            const {movieNames,movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        },
        clearGptMovieResults: (state,action) => {
            state.movieResults = null;
            state.movieNames = null;
        }
    }
})

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;