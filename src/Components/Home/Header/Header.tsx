import Container from "../../../shared/Container/Container";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.headerBlock}>
      <Container size="fullSize">
        <h1 className={style.logo}>NIMBUS / WEATHER</h1>
      </Container>
    </header>
  );
}
