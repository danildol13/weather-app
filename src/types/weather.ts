// weather //
export type WeatherProp = {
  main: Main;
  name: string;
  sys: Sys;
  visibility: number;
  weather: Weather[];
  wind: Wind;
};

type Main = {
  feels_like: number;
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  country: string;
  id: number;
};

type Weather = {
  description: string;
  main: string;
};

type Wind = {
  speed: number;
};

// location //

export type locationInfoProp = {
  lat: number;
  lon: number;
  name: string;
};

// Background //

export const weatherConditions: Record<string, string> = {
  Thunderstorm: "/public/weather/thunderstorm.jpg",
  Drizzle: "/public/weather/drizzle.jpg",
  Rain: "/public/weather/rain.jpg",
  Snow: "/public/weather/snow.jpg",
  Mist: "/public/weather/mist.jpg",
  Smoke: "/public/weather/smoke.avif",
  Haze: "/public/weather/haze.webp",
  Dust: "/public/weather/dust.webp",
  Fog: "/public/weather/fog.avif",
  Sand: "/public/weather/sand.jpg",
  Ash: "/public/weather/ash.jpg",
  Squall: "/public/weather/squall.jpeg",
  Tornado: "/public/weather/tornado.jpg",
  Clear: "/public/weather/clear.jpeg",
  Clouds: "/public/weather/clouds.avif",
};


// Forecast //

export type ForecastItem = {
  dt_txt: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

export type ForecastResponse = {
  list: ForecastItem[];
};



// Weather Icons //

export const weatherIcons: Record<string, string> = {
  "01d": "wi-day-sunny",
  "01n": "wi-night-clear",

  "02d": "wi-day-cloudy",
  "02n": "wi-night-alt-cloudy",

  "03d": "wi-cloud",
  "03n": "wi-cloud",

  "04d": "wi-cloudy",
  "04n": "wi-cloudy",

  "09d": "wi-showers",
  "09n": "wi-showers",

  "10d": "wi-rain",
  "10n": "wi-night-alt-rain",

  "11d": "wi-thunderstorm",
  "11n": "wi-thunderstorm",

  "13d": "wi-snow",
  "13n": "wi-snow",

  "50d": "wi-fog",
  "50n": "wi-fog",
};