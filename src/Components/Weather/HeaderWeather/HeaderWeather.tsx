import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import style from "./HeaderWeather.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function HeaderWeather() {
  return (
    <header>
      <Container className={style.weatherContainer} size="fullSize">
        <Link to="/" className={style.buttonBlock}>
          <IoIosArrowRoundBack className={style.icon} />
          <span className={style.link}>
            Home
          </span>
        </Link>
        <h1 className={style.logo}>NIMBUS / WEATHER</h1>
      </Container>
    </header>
  );
}
