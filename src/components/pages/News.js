import React from "react";

import classes from "./News.module.css";

const News = () => {
  return (
    <section className={classes.summary}>
      <h1>Awesome movies, delivered To You</h1>
      <p>
        Choose your favourite movie from our selection and enjoy the evenings in
        the company of your favorite actors
      </p>
      <p>
        All our movie selections are of the best quality and at affordable
        prices!
      </p>
    </section>
  );
};

export default News;
