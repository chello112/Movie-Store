import Card from "../../UI/Card";
import classes from "./AvailableMovies.module.css";
import MovieItem from "./MovieItem/MovieItem";
// import * as MovieImages from "../../assets";

const DUMMY_MOVIES = [
  {
    id: "m1",
    name: "James",
    description:
      "A story of a young man's quest to avenge the death of his older brother.",
    price: 16.5,
  },
  {
    id: "m2",
    name: "Fatherhood",
    description:
      "Fatherhood is the state of being a father. A person enters fatherhood when they become a father. This most commonly happens when their child is born, but it can also happen through adoption or by marrying or becoming a partner to someone with children. Fatherhood is a gender-specific version of the term parenthood.",
    price: 22.99,
  },
  {
    id: "m3",
    name: "Hustle",
    description:
      "A basketball scout discovers a phenomenal street ball player while in Spain and sees the prospect as his opportunity to get back into the NBA.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "The Contractor",
    description:
      "A discharged U.S. Special Forces sergeant, James Harper, risks everything for his family when he joins a private contracting organization.",
    price: 18.99,
  },
];

const AvailableMovies = () => {
  const moviesList = DUMMY_MOVIES.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      name={movie.name}
      description={movie.description}
      price={movie.price}
    />
  ));

  return (
    <section className={classes.movies}>
      <Card>
        <ul>{moviesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMovies;
