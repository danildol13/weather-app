import { useEffect, useState } from "react";
import Container from "../../../shared/Container/Container";
import useWeatherStore from "../../../store/WeatherStore";
import style from "./mainForecast.module.css";
import { forecastAPI } from "../../../api/weatherAPI";
import { weatherIcons, type ForecastResponse } from "../../../types/weather";
import "weather-icons/css/weather-icons.css";

export default function MainForecast() {
  const [location, setLocation] = useState<ForecastResponse | null>(null);
  const locationInfo = useWeatherStore((state) => state.weather);
  const cityName = useWeatherStore((state) => state.cityName);

  useEffect(() => {
    const locationFun = async () => {
      if (!cityName) return;
      const data = await forecastAPI(cityName);
      setLocation(data);
    };
    locationFun();
  }, [cityName]);
  return (
    <main>
      <Container size="xxl" className={style.commonContainer}>
        <p className={style.title}>FIVE DAYS AHEAD</p>
        <div className={style.loc}>
          <h2 className={style.city}>{cityName}</h2>
          <span className={style.country}>{locationInfo?.sys.country}</span>
        </div>
        <ul>
          {location &&
            location.list
              .filter((l) => l.dt_txt.includes("12:00:00"))
              .map((l) => (
                  <li key={l.dt_txt} className={style.item}>
                      
                  <div className={style.leftSide}>
                    {l.weather.map((ll) => (
                      <i
                        key={ll.description}
                        className={`wi ${weatherIcons[ll.icon]} ${style.icon}`}
                      ></i>
                    ))}

                    <div className={style.data}>
                      <p className={style.weekday} key={l.dt_txt}>
                        {new Date(l.dt_txt).toLocaleDateString("en-US", {
                          weekday: "long",
                        })}
                      </p>
                      <p className={style.month}>
                        {new Date(l.dt_txt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    {l.weather.map((c) => (
                      <p className={style.description} key={c.description}>
                        {`${c.description.charAt(0).toUpperCase()}${c.description.slice(1)}`}
                      </p>
                    ))}
                  </div>
                  <div className={style.tem}>
                    <p
                      className={style.maxTemp}
                    >{`${l.main.temp_max.toFixed(0)}°`}</p>
                    <p
                       className={style.minTemp}
                    >{`${l.main.temp_min.toFixed(0)}°`}</p>
                  </div>
                </li>
              ))}
        </ul>
      </Container>
    </main>
  );
}
