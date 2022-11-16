import React from "react";
import About from "../components/homeComponents/About";
import Banner from "../components/homeComponents/Banner";
import style from "./Home.module.css";

function Home() {
  return (
    <section className={style.home}>
      <Banner />
      <About />
    </section>
  );
}

export default Home;
