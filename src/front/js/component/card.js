import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#!" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
};

export { Card };