import React from 'react';
import { POSTER_IMG_URL } from '../utils/constants';

const MovieCard = ({poster}) => {
  return (
    <div className="w-56 pr-4 cursor-pointer">
      <img
        className="object-cover"
        alt="movie"
        src={POSTER_IMG_URL + poster}
      />
    </div>
  );
}

export default MovieCard;
