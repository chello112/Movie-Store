import React, { useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tranformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.rlease_date,
          };
        });
        setMovies(data.results);
      });
  };

  return (
    <div>
      <button onClick={fetchMoviesHandler}>Fetch movies</button>
    </div>
  );
};

export default Movie;
