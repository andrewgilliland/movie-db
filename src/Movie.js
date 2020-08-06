import React from "react";
import PropTypes from "prop-types";

export const Movie = ({ movie, desc }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{desc}</p>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  desc: PropTypes.string,
};

Movie.defaultProps = {
  desc: "Description not available",
};

export default Movie;
