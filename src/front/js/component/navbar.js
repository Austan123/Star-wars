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
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            {store.favorites.map((item, index) => {
              return (
                <li>
                  <a class="dropdown-item" href="#">
                    {item}
                  </a>
                  <button onClick={()=>{
                    
                     actions.deleteFavorites(index)}
                     }> Delete </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
