import { type ForecastResponse, type locationInfoProp, type WeatherProp } from "./../types/weather";
import axios from "axios";
const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;

export const locationRequest = async (city: string) => {
  const res = await axios.get<locationInfoProp[]>(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherKey}`,
  );

  return res.data[0];
};

export const weatherRequest = async (city: string) => {
  const locationInfos = await locationRequest(city);
  const lat = locationInfos.lat;
  const lon = locationInfos.lon;

  const weatherInfos = await axios.get<WeatherProp>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`,
  );

  console.log(weatherInfos.data)

  return { weather: weatherInfos.data, cityName: locationInfos.name };
};


export const forecastAPI = async (city: string) => {
  const locationInfos = await locationRequest(city);
  const lat = locationInfos.lat;
  const lon = locationInfos.lon;

  const forecastInfos = await axios.get<ForecastResponse>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`);

  return forecastInfos.data;
};