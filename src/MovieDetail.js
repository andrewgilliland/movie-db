import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: bottom;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  flex-direction: column;

  > div {
    margin-left: 20px;
  }

  img {
    position: relative;
    top: -5rem;
  }
`;

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const movie = await res.json();
        console.log(movie);
        setMovie(movie);
      } catch (e) {
        console.log(e);
      }
    }
    getMovies();
  }, []);

  console.log(movie);

  const { backdrop_path, poster_path, title, release_date, overview } = movie;

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
      <MovieInfo>
        <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
        <div>
          <h1>{title}</h1>
          <h3>{release_date}</h3>
          <p>{overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
};

export default MovieDetail;
