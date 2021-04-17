import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import {
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAILURE,
} from '../actionTypes';
import WeatherContext from './weatherContext';
import { baseURL, forecast, appId, week } from '../../assets/api/const';
import weatherReducer from './weatherReducer';



const WeatherState = (props) => {
  const initialState = {
    data: {},
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const getWeatherData = useCallback(
    async (cityWeather = 'Yerevan', count = week) => {
      try {
        const res = await axios.get(
          `${baseURL}${forecast}${cityWeather}${count}${appId}`
        );
          dispatch({
            type: FETCH_WEATHER_DATA_SUCCESS,
            payload: res,
          });
          localStorage.setItem('weather',JSON.stringify(res.data))
       
      } catch (error) {
        dispatch({
          type: FETCH_WEATHER_DATA_FAILURE,
          payload: error.response,
        });
      }
    },
    []
  );
  return (  
    <WeatherContext.Provider
      value={{
        data: state.data,
        getWeatherData,
      }}
    >   
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherState;
