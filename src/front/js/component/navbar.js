import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars API</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            {store.favorites.map((item, index) => {
              return <div>{item}</div>;
            })}
            <button className="btn btn-primary">Favorites</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
