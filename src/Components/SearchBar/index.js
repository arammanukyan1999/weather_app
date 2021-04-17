import React, { useContext, useEffect, useState } from "react";
import { Alert } from "antd";
import { week } from "../../assets/api/const";
import WeatherContext from "../../context/get-weather-data/weatherContext";
import Search from "antd/lib/input/Search";

export default function SearchBar() {
  const weatherContext = useContext(WeatherContext);
  const data = weatherContext?.data.data;
  const [selectedCity, setSelectedCity] = useState("Yerevan");
  function onSearch(value) {
    setSelectedCity(value);
  }
  useEffect(() => {
    weatherContext?.getWeatherData(selectedCity.toString(), week);
  }, [selectedCity]);
  return (
    <>
      {data?.cod != 200 && <Alert message={data?.message} type="error" />}
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </>
  );
}
