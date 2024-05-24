import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice"
import langReducer from "./langSlice"

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    gptSearch: gptReducer,
    lang:langReducer,
  },
});

export default appStore;
