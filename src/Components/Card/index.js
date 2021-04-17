import React from "react";
import "./Card.scss";

import windIcon from "../../assets/images/temp.png";
import termIcon from "../../assets/images/winds.png";

export default function Card({ weather, city }) {
  return (
    <div className="weather__container--items" key={weather.dt}>
      <div className="weather__container--name">
        <p>{city}</p>
      </div>
      <div className="weather__container--temp">
        <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt="Weather Icon"
        />
        <p>{weather?.main.temp} &deg;&nbsp;C</p>
      </div>
      <div className="weather__container--type">
        <p>{weather.weather[0].main}</p>
      </div>
      <div className="weather__container--options">
        <div>
          <img src={windIcon} alt="Wind Icon" />
          <p>Wind speed &nbsp;{weather.wind.speed}&nbsp; m/s</p>
        </div>
        <div>
          <img src={termIcon} alt="Wind Icon" />
          <p>Wind degree &nbsp;{weather.wind.deg} &nbsp; deg</p>
        </div>
      </div>
    </div>
  );
}
