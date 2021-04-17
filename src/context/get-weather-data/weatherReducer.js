import { FETCH_WEATHER_DATA_FAILURE, FETCH_WEATHER_DATA_SUCCESS } from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error:false
      };
    case FETCH_WEATHER_DATA_FAILURE: 
    return {
      ...state,
      data: action.payload,
    }
    default:
      return state;
  }
};
