import { useEffect, useState } from "react";

import Card from "../../UI/Card";
import MovieItem from "./MovieItem/MovieItem";
import classes from "./AvailableMovies.module.css";

const AvailableMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://moviestore-24039-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMovies = [];

      for (const key in responseData) {
        loadedMovies.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    };

    fetchMovies().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MovieIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return <section className={classes.MoviesError}>{httpError}</section>;
  }

  const moviesList = movies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      name={movie.name}
      description={movie.description}
      price={movie.price}
    />
  ));

  return (
    <Card>
      <ul>{moviesList}</ul>
    </Card>
  );
};

export default AvailableMovies;
