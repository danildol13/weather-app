import HeaderWeather from "../../Components/Weather/HeaderWeather/HeaderWeather";
import MainWeather from "../../Components/Weather/MainWeather/MainWeather";
import useWeatherStore from "../../store/WeatherStore";
import { weatherConditions } from "../../types/weather";
import style from "./Weather.module.css";
export default function Weather() {
  const weather = useWeatherStore((state) => state.weather);
  const bg = weather
    ? weatherConditions[weather.weather[0].main]
    : "/free-snow-overlay-loop-video-4k.jpg";
  return (
    <div className={style.commonContainer} style={{ backgroundImage: `url(${bg})` }}>
      <HeaderWeather />
      <MainWeather />
    </div>
  );
}
