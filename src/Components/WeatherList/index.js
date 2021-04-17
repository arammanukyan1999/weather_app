import React, { useContext, useEffect } from "react";
import WeatherContext from "../../context/get-weather-data/weatherContext";
import Card from "../Card";

export default function WeatherList() {
  const weatherContext = useContext(WeatherContext);
  const { getWeatherData } = weatherContext;
  const data = weatherContext?.data.data;
  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);
  const savedData = JSON.parse(localStorage.getItem("weather"));
  return (
    <div className="weather__container">
      {data && data.cod == 200
        ? data?.list.map((temp, index) => (
            <Card key={index} weather={temp} city={data.city.name} />
          ))
        : savedData?.list.map((temp,index) => (
            <Card key = {index} weather={temp} city={savedData.city.name} />
          ))}
    </div>
  );
}
