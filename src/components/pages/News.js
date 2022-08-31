import React from "react";

import classes from "./News.module.css";

const News = () => {
  return (
    <section className={classes.summary}>
      <h2>Awesome movies, Delivered To You</h2>
      <p>
        Choose your favorite movie from our selection and enjoy your evenings in
        the company of your favorite actors
      </p>
      <p>
        All of our movie options are of the best quality and at affordable prices!
      </p>
    </section>
  );
};

export default News;
