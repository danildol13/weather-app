import Container from "../../../shared/Container/Container";
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <Container size="fullSize" className={style.footer}>
        <p className={style.smallDescription}>Data by OpenWeatherMap</p>
        <p className={style.smallDescription}>© 2026 Nimbus</p>
      </Container>
    </footer>
  );
}
  