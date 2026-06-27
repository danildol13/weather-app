import Footer from "../../Components/Home/Footer/Footer";
import Header from "../../Components/Home/Header/Header";
import Main from "../../Components/Home/Main/Main";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.commonContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
