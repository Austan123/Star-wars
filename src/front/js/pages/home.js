import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Planets } from "../component/planets.js";
export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <div className="text-center mt-5">
        <h1>
          <strong> STAR WARS!! </strong>
        </h1>
      </div>
      <div className="row characterRow flex-nowrap ">
        {store.people.results &&
          store.people.results.map((item, i) => {
            return (
              <Card
                key={i}
                title={item.name}
                text={item.ieyeColor}
                id={item.uid}
              />
            );
          })}
      </div>
      <div className="row flex-nowrap characterRow">
        {store.planets.map((planet, idx) => {
          return (
            <Planets
              key={idx}
              title={planet.name}
              text={`${planet.name} is a planet with a gravity of ${planet.gravity}, and it has a ${planet.climate} climate.`}
            />
          );
        })}
      </div>
    </div>
  );
};
