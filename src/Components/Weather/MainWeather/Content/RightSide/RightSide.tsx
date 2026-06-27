import { Link } from "react-router-dom";
import useWeatherStore from "../../../../../store/WeatherStore";
import style from "./RightSide.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function RightSide() {
  const weather = useWeatherStore((state) => state.weather);
  return (
    <div className={style.rightSide}>
      <ul>
        <li>
          <div className={style.line}>
            <p className={style.title}>Details</p>
          </div>
        </li>
        <li>
          <div className={style.line}>
            <p className={style.title}>Feels like</p>
            <div className={style.valueContainer}>
              <p className={style.value}>
                {Math.round(weather?.main.feels_like ?? 0)}
              </p>
              <p className={style.sign}>°C</p>
            </div>
          </div>
        </li>
        <li>
          <div className={style.line}>
            <p className={style.title}>Humidity</p>
            <div className={style.valueContainer}>
              <p className={style.value}>{weather?.main.humidity}</p>
              <p className={style.sign}>%</p>
            </div>
          </div>
        </li>
        <li>
          <div className={style.line}>
            <p className={style.title}>Wind</p>
            <div className={style.valueContainer}>
              <p className={style.value}>{weather?.wind.speed}</p>
              <p className={style.sign}>m/s</p>
            </div>
          </div>
        </li>
        <li>
          <div className={style.line}>
            <p className={style.title}>Visibility</p>
            <div className={style.valueContainer}>
              <p className={style.value}>
                {weather && (weather.visibility / 1000).toFixed(1)}
              </p>
              <p className={style.sign}>KM</p>
            </div>
          </div>
        </li>
      </ul>
      <Link className={style.link} to="/forecast">
        <span className={style.linkText}>5-DAY FORECAST</span>
              <IoIosArrowRoundForward size={15} className={style.linkIcon} />
      </Link>
    </div>
  );
}
