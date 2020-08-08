import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieGrid = styled.div`
  display: grid;
  padding: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(154px, 1fr));
  grid-gap: 2rem;
`;

export const MoviesList = () => {
  const [allMovies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        const movies = await res.json();
        setMovies(movies.results);
      } catch (e) {
        console.log(e);
      }
    }
    getMovies();
  }, []);

  return (
    <MovieGrid>
      {allMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};

export default MoviesList;
