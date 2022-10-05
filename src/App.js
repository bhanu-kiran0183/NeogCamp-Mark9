import "./styles.css";
import { useState } from "react";
const cityDB = {
  Chennai: [
    { name: "Marina Beach", rating: "Rating: ⭐⭐⭐⭐" },
    { name: "Edward Elliot's Beach", rating: "Rating: ⭐⭐⭐⭐⭐" },
    { name: "Guindy National Park", rating: "Rating: ⭐⭐⭐⭐" }
  ],

  Bangalore: [
    {
      name: "Lalbagh Botanical Garden",
      rating: "Rating: ⭐⭐⭐⭐"
    },
    {
      name: "Bengaluru Palace",
      rating: "Rating: ⭐⭐⭐⭐"
    },
    {
      name: "Cubbon Park",
      rating: "Rating: ⭐⭐⭐⭐⭐"
    }
  ],
  Kerala: [
    {
      name: "Sree Padmanabhaswamy Temple",
      rating: "Rating: ⭐⭐⭐⭐"
    },
    {
      name: "Athirappilly Water Falls",
      rating: "Rating: ⭐⭐⭐⭐⭐"
    },
    {
      name: "Cherai Beach",
      rating: "Rating: ⭐⭐⭐⭐⭐"
    }
  ]
};
export default function App() {
  var [tourDes, settourDes] = useState("Chennai");
  function onClickHandler(city) {
    settourDes(city);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="foodemji">
          🚀
        </span>{" "}
        Popular destinations in South India
      </h1>
      <p style={{ fontSize: "smaller" }}>
      Which are the most visited place in South India. Select a city to get started
      </p>
      <div>
        {Object.keys(cityDB).map((city) => {
          return (
            <button
              key={city}
              className="cities"
              onClick={() => onClickHandler(city)}
            >
              {city}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {cityDB[tourDes].map((city) => {
            return (
              <li
                key={city.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{city.name}</div>
                <div style={{ fontSize: "smaller" }}>{city.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
