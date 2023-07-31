import React from "react";
import Box from "./Box";

const Main = ({
  isOpen1,
  setIsOpen1,
  isOpen2,
  setIsOpen2,
  watched,
  setWatched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  movies,
}) => {
  return (
    <main className="main">
      <Box
        isOpen1={isOpen1}
        setIsOpen1={setIsOpen1}
        movies={movies}
        isOpen2={isOpen2}
        watched={watched}
        avgImdbRating={avgImdbRating}
        avgRuntime={avgRuntime}
        avgUserRating={avgUserRating}
        setIsOpen2={setIsOpen2}
        setWatched={setWatched}
      />
    </main>
  );
};

export default Main;
