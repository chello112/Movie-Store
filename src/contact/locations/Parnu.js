import React from "react";
import "./Locations.css";
import * as ReactDOM from "react-dom";

export default function Parnu({ openParnu, onClose }) {
  if (!openParnu) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="modal">
          <h1>Pärnu</h1>
          <p>Monday 09:00 - 20:00</p>
          <p>Tuesday 09:00 - 20:00</p>
          <p>Wednesday 09:00 - 20:00</p>
          <p>Thursday 09:00 - 20:00</p>
          <p>Friday 09:00 - 20:00</p>
          <p>Saturday Closed</p>
          <p>Sunday Closed</p>
          <button onClick={onClose} className="btn">Close</button>
        </div>
      </div>
    </>,
    document.getElementById("parnu")
  );
}
