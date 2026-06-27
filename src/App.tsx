import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Weather from "./Pages/Weather/Weather";
import Forecast from "./Pages/Forecast/Forecast.tsx";

function App() {
  return (
    <BrowserRouter basename="/weather-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/forecast" element={<Forecast/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
