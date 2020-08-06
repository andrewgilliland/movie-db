import React, { useState, useRef } from "react";
import logo from "./movie-logo.svg";
import "./App.css";

import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "Star Wars",
    desc: "A space movie",
  },
  {
    id: 2,
    title: "Spider Man",
  },
  {
    id: 3,
    title: "Avengers",
  },
  {
    id: 4,
    title: "Total Recall",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} desc={movie.desc} />
      ))}
    </div>
  );
}

export default App;
