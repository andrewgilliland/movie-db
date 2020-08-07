import React, { useState, useEffect } from "react";
import logo from "./movie-logo.svg";
import "./App.css";

import Movie from "./Movie";

function App() {
  const [allMovies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        );
        const movies = await res.json();
        setMovies(movies.results);
      } catch (e) {
        console.log(e);
      }
    }
    getMovies();
  }, []);

  console.log(allMovies);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {allMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
