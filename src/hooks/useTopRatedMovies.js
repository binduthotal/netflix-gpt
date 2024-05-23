import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TOP_RATED_MOVIES_API, options } from '../utils/constants';
import { addTopratedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopratedMovies();
  }, []);

  const getTopratedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, options);
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };
}

export default useTopRatedMovies;
