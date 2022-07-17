import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardRow = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>{props.title}</h1>
      <div className="row characterRow flex-nowrap ">
        {props.data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="card"
              style={{ width: "18rem", background: "black" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "white" }}>
                  {item.name}
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  {item.description}
                </p>
                <Link
                  to={"/" + props.title + "/" + idx}
                  className="btn btn-primary"
                >
                  <button
                    onClick={() => {
                      actions.getTitle(props.title);
                    }}
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
