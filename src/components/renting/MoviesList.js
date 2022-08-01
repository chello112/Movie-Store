import { Fragment } from "react";

import MoviesSummary from "./MoviesSummary";
import AvailableMovies from "./AvailableMovies";

const MoviesList = () => {
  return (
    <Fragment>
     {/* <MoviesSummary /> */}
      <AvailableMovies />
    </Fragment>
  );
};

export default MoviesList;
