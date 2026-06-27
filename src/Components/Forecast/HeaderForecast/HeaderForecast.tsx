import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import { IoIosArrowRoundBack } from "react-icons/io";
import style from "./HeaderForecast.module.css";

export default function HeaderForecast() {
  return (
    <header>
      <Container size="xxl" className={style.commonContainer}>
        <Link to="/weather" className={style.buttonBlock}>
          <IoIosArrowRoundBack className={style.icon} />
          <span className={style.link}>Back</span>
        </Link>
        <h1 className={style.logo}>NIMBUS / WEATHER</h1>
      </Container>
    </header>
  );
}
