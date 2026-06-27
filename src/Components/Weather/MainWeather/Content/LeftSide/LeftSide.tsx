import { useState } from "react";
import style from "./LeftSide.module.css";
import { weatherRequest } from "../../../../../api/weatherAPI";
import { GoSearch } from "react-icons/go";
import useWeatherStore from "../../../../../store/WeatherStore.ts";

export default function LeftSide() {
  const [city, setCity] = useState<string>("");
  const setWeather = useWeatherStore((state) => state.setWeather);
  const weather = useWeatherStore((state) => state.weather);
  const setCityName = useWeatherStore((state) => state.setCityName);
  const cityName = useWeatherStore(state => state.cityName)

  const handleSubmit = async () => {
    const data = await weatherRequest(city);
    setWeather(data.weather);
    setCityName(data.cityName);
  };
  return (
    <div className={style.leftSide}>
      <h2 className={style.title}>SEARCH A CITY</h2>
      <div className={style.inputArea}>
        <div className={style.inputContainer}>
          <GoSearch className={style.search} />
          <input
            placeholder="Enter your city"
            className={style.cityInput}
            type="text"
            onChange={(e) => setCity(e.target.value)}
            name="city"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <button className={style.searchButton} onClick={handleSubmit}>
          GO
        </button>
      </div>

      <div className={style.currentWeather}>
        <p
          className={style.cardTitle}
        >{`${weather?.sys.country.toUpperCase()} · ${weather?.weather[0].main.toUpperCase()}`}</p>
        <p className={style.cityName}>{cityName}</p>
        <div className={style.tempArea}>
          <span className={style.temp}>
            {Math.round(weather?.main.temp ?? 0)}
          </span>
          <p className={style.cel}>°C</p>
        </div>
        <p className={style.description}>
          {weather?.weather[0]?.description
            ? weather.weather[0].description.charAt(0).toUpperCase() +
              weather.weather[0].description.slice(1)
            : ""}
        </p>
      </div>
    </div>
  );
}
