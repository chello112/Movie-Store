import classes from "./Card.module.css";

const Card = (props) => {
  //Used in available movies
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
