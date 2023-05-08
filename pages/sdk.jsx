import React from "react";
import styles from "../styles/sdk.module.scss";

const SDK = () => {
  return (
    <section className={styles.sdk}>
      <div className="container">
        <div className={styles.background}>
          <img alt="" src="https://pogr.gg/static/hero-images/sdk.jpg" />
        </div>
        <section className={styles.hero}>
          <h1 className={styles.hero__title}>
            <img
              src="https://pogr.gg/static/left-curly-bracket.png"
              className={styles.curly}
            />
            <img
              src="https://pogr.gg/static/left-curly-bracket.png"
              className={styles.curly}
            />
            UNLEASH THE
            <br />
            NEW POWER
          </h1>
          <p className={styles.hero__description}>
            The powerful and epic POGR SDK will help your studio take your games
            to the next levels!
          </p>
          <div>
            <button className="btn">Get Started</button>
            <button className={"btn " + styles.hero__cta}>Book a demo</button>
          </div>
        </section>
        <section className={styles.cta}>
          <h2>Providing tools for game developers to</h2>
          <p>
            Our SDK is easy to use and offers a range of powerful features that
            can be tailored to your specific needs. Our intuitive interface and
            comprehensive documentation make it simple to get started, and our
            expert support team is available to assist you along the way.
            Whether you are a seasoned developer or new to game development, our
            SDK offers the tools and support you need to create engaging and
            successful games. Take control of your game development with our
            customizable and efficient SDK.
          </p>
          <button className="btn">Integrate our SDK</button>
        </section>

        <section className={styles.blogs}>
          <article className={styles.blog}>
            <div className={styles.blog__left}>
              <h3>Packed into a minimized but powerful format</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                in incidunt? Explicabo, similique. Blanditiis dolorum
                necessitatibus asperiores ea cupiditate officiis esse explicabo
                tenetur sapiente! Maiores quam at deserunt molestiae cumque
                omnis architecto ut vitae cupiditate enim, deleniti ea odit
                similique. Itaque sequi nisi unde officiis inventore molestias
                error at atque.
              </p>
              <button className="btn">Read documentation</button>
            </div>
            <div className={styles.blog__right}>
              <img src="https://pogr.gg/static/hero-images/sdk.jpg" />
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default SDK;
