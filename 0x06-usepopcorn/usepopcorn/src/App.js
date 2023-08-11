import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMovieList";
import MovieDetails from "./components/MovieDetails";
import Summary from "./components/Summary";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { useMovies } from "./components/useMovies";
import { useLocalStorageState } from "./components/useLocalStorageState";
import useKey from "./components/useKey";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const inputRef = useRef(null);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // const [watched, setWatched] = useState([]);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  const Logo = () => {
    return (
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    );
  };

  function Search({ query, setQuery }) {
    const inputRef = useRef(null);

    useKey("Enter", function () {
      if (document.activeElement === inputRef.current) return;
      inputRef.current.focus();
      setQuery("");
    });

    return (
      <input
        ref={inputRef}
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }

  const Results = () => {
    return (
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    );
  };

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  return (
    <>
      <SearchBar>
        <Logo />
        <Search query={query} setQuery={setQuery} inputRef={inputRef} />
        <Results />
      </SearchBar>
      <Main>
        {/* Explicitly passing elements as props */}
        {/*<Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <Summary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        />*/}

        {/* Implicitly passing elements as Children */}
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
