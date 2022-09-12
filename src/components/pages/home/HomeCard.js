import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCard.css";

function HomeCard(props) {
  let navigate = useNavigate();

  return (
    <>
      <div className="card__pic-wrap" data-category={props.label}>
        <img className="card__pic" alt="Movie image" src={props.src} />
      </div>
      <div className="position">
        <button
          className="homeBtn"
          onClick={() => {
            navigate("/renting");
          }}
        >
          WIEW MOVIES
        </button>
        <button
          className="homeBtn"
          onClick={() => {
            navigate("/contact");
          }}
        >
          CHECK LOCATIONS
        </button>
      </div>
    </>
  );
}

export default HomeCard;
