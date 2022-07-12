import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Description = () => {
  const { store, actions } = useContext(Context);
  let { theindex, type } = useParams();

  return (
    <div>
      {" "}
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {store.people[theindex]?.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <div className="row g-2 g-lg-3">
                  <div className="col">
                    <div className="p-3">
                      <h6>year</h6>
                      {store.people[theindex]?.birth_year},
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h6>gender</h6>
                      {store.people[theindex]?.gender},
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h6>height</h6>
                      {store.people[theindex]?.height}
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h6>mass</h6>
                      {store.people[theindex]?.mass}
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h6>hair_color</h6>
                      {store.people[theindex]?.hair_color}
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h6>eye_color</h6>
                      {store.people[theindex]?.eye_color},
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h6>year</h6>
                      {store.people[theindex]?.birth_year},
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {store.planets[theindex]?.name}
    </div>
  );
};
