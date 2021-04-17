import './App.css';
import 'antd/dist/antd.css';
import SearchBar from "./Components/SearchBar"
import WeatherList from './Components/WeatherList';
import WeatherState from './context/get-weather-data/weatherState';

function App() {
  return (
    <div className="App">
      <WeatherState>

        <SearchBar />
        <WeatherList />
        </WeatherState >
    </div>
  );
}

export default App;
