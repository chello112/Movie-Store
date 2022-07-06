import React from "react";
import './Renting.css';

import AddMovie from "../renting/AddMovie";
import Movie from "../renting/Movie";
import MoviesList from "../renting/MoviesList";

const Renting = () => {
  let content = <p>Found no movies.</p>;

  return (
    <div className="renting">
    <React.Fragment>
      <section>
        <AddMovie />
      </section>
      <section>
        <button>Fetch movies</button>
      </section>
      <MoviesList />
    </React.Fragment>
    </div>
  );
};

export default Renting;
