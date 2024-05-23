import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div className="bg-black px-5">
      <div className=''>
        <h1 className="text-white text-xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll scroll-pb-1">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} poster={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
