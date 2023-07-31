import React from "react";
import { useState } from "react";

const SearchBar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Input />
      <Results />
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
};

const Input = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

const Results = () => {
  return (
    <p className="num-results">
      Found <strong>X</strong> results
    </p>
  );
};

export default SearchBar;
