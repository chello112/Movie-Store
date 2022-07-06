import React from "react";

import { DummyMovies } from "./DummyMovies";
import classes from "./MoviesList.module.css";

const MoviesList = () => {
  return (
    <ul className={classes["movie"]}>
      {DummyMovies.map((movie, index) => {
        return (
          <li key={index}>
            <h2>{movie.title}</h2>
            <h3>{movie.releaseDate}</h3>
            {movie.openingText}
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
