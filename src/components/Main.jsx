import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";

export default function Main() {
  const [click] = useContext(SearchContext);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${click}&units=metric&appid=d0672f3b6d30caa01c6fd02c6460ed11`
        );
        if (!response.ok) {
          throw new Error(`There is no city named: ${click}`);
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (click) {
      setLoading(true);
      setError(null);
      fetchWeather();
    }
  }, [click]);

  if (loading) return <main className="main">Loading...</main>;

  if (error) return <main className="main"><span style={{color:'red'}}>Error</span>: {error}</main>;

  return (
    <main className="main">
      {weather && (
        <div className="info">
          <div>
            <h1>{weather.name}</h1>
            <div className="text">
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Description: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          </div>
          <div className="img-container">
            <img src="./images/weather.webp" alt="Weather illustration" />
          </div>
        </div>
      )}
    </main>
  );
}
