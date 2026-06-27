import { type WeatherProp } from "./../types/weather";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WeatherProps {
  weather: WeatherProp | null;
  cityName: string | null;
  setWeather: (data: WeatherProp) => void;
  setCityName: (data: string) => void;
}

const useWeatherStore = create<WeatherProps>()(
  persist(
    (set) => ({
      weather: null,
      cityName: null,
      setWeather: (data: WeatherProp) =>
        set(() => ({
          weather: data,
        })),

      setCityName: (data: string) =>
        set(() => ({
          cityName: data,
        })),
    }),
    {
      name: "weather",
    },
  ),
);

export default useWeatherStore;
