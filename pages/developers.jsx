import React from "react";
import styles from "../styles/home.module.scss";
import InterestCard from "components/InterestCard";
import { developersInterests } from "data";

const Developers = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.background}>
          <img alt="" src="https://pogr.gg/static/hero-images/dev.jpg" />
        </div>
        <section className={styles.hero}>
          <h5
            className={styles.hero__label}
            style={{ color: "rgb(255, 156, 65)" }}
          >
            TAILORED FOR DEVELOPERS
          </h5>
          <h1 className={styles.hero__title}>
            FUEL YOUR
            <br />
            GAME ENGINE
          </h1>
          <p className={styles.hero__description}>
            Bring a new layer of understanding to games and communities. Level
            up your development!
          </p>
          <button className={"btn " + styles.hero__cta}>Join waitlist</button>
        </section>
        <section className={styles.quote}>
          <h3>Providing tools for game developers to</h3>
          <h2 style={{ color: "rgb(255, 156, 65)" }}>Visualize their data</h2>
        </section>
        <section className={styles.interest}>
          <h3>Why this should interest you</h3>
          <div>
            {developersInterests.map((ele) => (
              <InterestCard data={ele} key={ele.title} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Developers;
