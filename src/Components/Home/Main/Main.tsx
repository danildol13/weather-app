import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import style from "./Main.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Main() {
  return (
    <main className={style.main}>
      <Container className={style.wholeContainer}>
        <div className={style.smallBlock}>
          <h2 className={style.title}>
            {"Nimbus".split("").map((letter, id) => (
              <span key={id} className={style.letter}>
                {letter}
              </span>
            ))}
          </h2>
          <p className={style.subtitle}>
            The weather, stripped to its essence.
          </p>
        </div>
        <Link to="/weather" className={style.secondSmallBlock}>
          <span className={style.nextPageButton}>ENTER</span>
          {<IoIosArrowRoundForward className={style.icon} />}
        </Link>
      </Container>
    </main>
  );
}
