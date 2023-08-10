import React from 'react'
import Movie from './Movie';

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;