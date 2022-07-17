import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#!" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
};
