import { createSlice } from "@reduxjs/toolkit";
import { activate } from "firebase/remote-config";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topratedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    tvArrivingToday: null,
    tvPopular: null,
    tvToRated: null,
    tvOnTheAir: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTvArrivingToday: (state, action) => {
      state.tvArrivingToday = action.payload;
    },
    addTvPopular: (state, action) => {
      state.tvPopular = action.payload;
    },
    addTvOnTheAir: (state, action) => {
      state.tvOnTheAir = action.payload;
    },
    addTvTopRated: (state, action) => {
      state.tvToRated = action.payload;
    },
  },
});

export const {
    addNowPlayingMovies,
    addPopularMovies,
    addTopratedMovies,
    addUpcomingMovies,
    addMovieTrailer,
    addTvArrivingToday,
    addTvOnTheAir,
    addTvPopular,
    addTvTopRated
} = movieSlice.actions;
export default movieSlice.reducer;
