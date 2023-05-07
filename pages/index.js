import React, { useRef } from "react";
import styles from "../styles/home.module.scss";
import InterestCard from "@/components/InterestCard";
import { gamesInterests } from "@/data";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.background}>
          <img alt="" src="https://pogr.gg/static/hero-images/gamer.jpg" />
        </div>
        <section className={styles.hero}>
          <h5 className={styles.hero__label}>MADE FOR GAMERS</h5>
          <h1 className={styles.hero__title}>
            Gamify <br />
            your journey
          </h1>
          <p className={styles.hero__description}>
            Egage & compete with the gaming community and improve your
            performance!
          </p>
          <button className={"btn " + styles.hero__cta}>Join waitlist</button>
        </section>
        <section className={styles.quote}>
          <h3>Building the statical foundation for</h3>
          <h2 style={{ color: "#0dd" }}>The future of gaming</h2>
        </section>
        <section className={styles.interest}>
          <h3>Why this should interest you</h3>
          <div>
            {gamesInterests.map((ele) => (
              <InterestCard data={ele} key={ele.title} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
