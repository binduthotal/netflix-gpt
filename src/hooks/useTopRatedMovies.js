import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOP_RATED_MOVIES_API, options } from '../utils/constants';
import { addTopratedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {

  const topRatedMovies = useSelector((store) => store.movies.topratedMovies);
  const dispatch = useDispatch();

  useEffect(() => {
     !topRatedMovies && getTopratedMovies();
  }, []);

  const getTopratedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, options);
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };
}

export default useTopRatedMovies;
