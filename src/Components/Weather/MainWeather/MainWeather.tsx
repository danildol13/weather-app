import Container from "../../../shared/Container/Container";
import LeftSide from "./Content/LeftSide/LeftSide";
import RightSide from "./Content/RightSide/RightSide";
import style from "./MainWeather.module.css";

export default function MainWeather() {


  return (
    <main>
      <Container className={style.mainContainer} size="fullSize">
        <LeftSide/>
        <div className={style.divider} />
        <RightSide/>
      </Container>
    </main>
  );
}
