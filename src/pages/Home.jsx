import axios from "axios";
import { useEffect, useState } from "react";

const apikey = "ca6c0eaa25c75a08a5c2a8610369df2a";

const CITIES = [
  "Kathmandu",
  "London",
  "Delhi",
  "Paris",
  "Moscow",
  "Tokyo",
  "New York",
  "Sydney",
];

export default function Home() {
  const [city, setCity] = useState("Kathmandu");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState(
    () => localStorage.getItem("unit") || "metric"
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${unit}`
      )
      .then((response) => {
        if (!cancelled) {
          setWeatherData(response.data);
          setError(false);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [city, unit]);

  const loading = !weatherData && !error;

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setWeatherData(null);
    setError(false);
  };

  const handleUnitChange = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    setWeatherData(null);
    localStorage.setItem("unit", newUnit);
  };

  const speedUnit = unit === "metric" ? "km/h" : "mph";
  const tempSign = unit === "metric" ? "C" : "F";

  return (
    <div className="home">
      <section className="home-hero">
        <span className="home-badge">
          <span className="badge-dot"></span>
          Live Weather
        </span>
        <h1 className="home-title">
          Welcome to <span>Weather App</span>
        </h1>
        <p className="home-subtitle">
          Get real-time weather updates for cities around the world.
        </p>
      </section>

      <div className="search-panel">
        <label className="city-label" htmlFor="city-select">
          Choose your city
        </label>
        <select
          id="city-select"
          className="city-select"
          value={city}
          onChange={handleCityChange}
        >
          {CITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button className="unit-toggle" type="button" onClick={handleUnitChange}>
          <span className="unit-dot"></span>
          {unit === "metric" ? "Celsius" : "Fahrenheit"}
        </button>
      </div>

      {loading && (
        <div className="weather-card weather-card--state" role="status">
          <div className="spinner"></div>
          <p>Fetching the forecast for {city}...</p>
        </div>
      )}

      {error && !loading && (
        <div className="weather-card weather-card--state weather-card--error">
          <span className="state-icon">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </span>
          <p>Couldn't fetch weather for {city}. Please try again later.</p>
        </div>
      )}

      {weatherData && !loading && !error && (
        <div className="weather-card">
          <div className="weather-main">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt={weatherData.weather[0].description}
            />
            <p className="weather-temp">
              {Math.round(weatherData.main.temp)}
              <span className="weather-unit">°{tempSign}</span>
            </p>
          </div>

          <h2 className="weather-city">
            {weatherData.name}
            <small>{weatherData.sys.country}</small>
          </h2>
          <p className="weather-desc">{weatherData.weather[0].description}</p>

          <div className="weather-stats">
            <div className="stat">
              <span className="stat-icon">
                <i className="fa-solid fa-temperature-half"></i>
              </span>
              <span>
                <span className="stat-label">Feels Like</span>
                <span className="stat-value">
                  {Math.round(weatherData.main.feels_like)}°
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <i className="fa-solid fa-droplet"></i>
              </span>
              <span>
                <span className="stat-label">Humidity</span>
                <span className="stat-value">{weatherData.main.humidity}%</span>
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <i className="fa-solid fa-wind"></i>
              </span>
              <span>
                <span className="stat-label">Wind Speed</span>
                <span className="stat-value">
                  {Math.round(weatherData.wind.speed)} {speedUnit}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <i className="fa-solid fa-gauge-high"></i>
              </span>
              <span>
                <span className="stat-label">Pressure</span>
                <span className="stat-value">
                  {weatherData.main.pressure} hPa
                </span>
              </span>
            </div>
          </div>

          <p className="weather-updated">
            Updated{" "}
            {new Date(weatherData.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      )}
    </div>
  );
}
