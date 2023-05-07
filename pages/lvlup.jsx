import React from "react";
import styles from "../styles/lvlup.module.scss";

const LvlUp = () => {
  return (
    <section className={styles.lvlup}>
      <article className={styles.podcast}>
        <div className="container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/teNA_bzUom8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1>Danny Cortenraede Reveals How He Built His Business Empire!</h1>
          <h5>Episode 4 - 33 min 27 sec</h5>
          <h5 className={styles.date}>March 23, 2023</h5>
          <p>
            For the first episode of the LVLUP Pod, we hosted all-star POGR
            investor and Venturerock Managing Partner Danny Cortenraede. With
            decades of experience behind him, Danny has mastered the art of
            engagement. He knows when to walk away and when to double down, and
            that’s why he’s so confident POGR’s analytics will power the next
            generation of games and the Metaverse. Throughout LVLUp’s debut
            episode, Danny discusses his history working for massive marquee
            companies such as Sony & T-Mobile before partnering with major
            brands like Nike, Adidas, Rock Nation and Budweiser. He also touches
            on a slew of other topics including his work in start-up
            acceleration and the philosophy behind venture capital. So far,
            Venturerock has dominated the sports tech industry space, and now
            Danny has his sights set on an even more fruitful goal: “just
            enjoying the ride.” If you listen to this whole episode, you’ll
            level up your focus and assert yourself at the head of the pack.
            When you make it to the moon, you can thank LVLUP Pod. Danny
            Cortenraede is a global serial entrepreneur, investor and Co-Founder
            & Managing Partner at Venturerock where he is running a 75 million
            investment company. As a seasoned entrepreneur (5 times founder) and
            investor, Cortenraede built several successful companies on a global
            scale in the last few years. His most recent is building Wannahaves
            from scratch that is affiliated to sister company and digital
            platform 433, the world’s largest online content creator of sports
            content with 60M followers across its assets and 5B views per month.
            From 0 – to a multi million dollars revenue company. He opened three
            oﬃces starting in Amsterdam, NYC and LA. Cortenraede has been
            investing in real estate for many years. One of his latest projects
            is in the Hollywood Hills: Hollywood Crescent Besides this
            Cortenraede is a co-star, judge of the hottest new business reality
            streaming TV series Unicorn Hunters. Cortenraede stars alongside the
            likes of Co-Founder Apple Steve Wozniak, 43rd Treasurer of the
            United States Rosie Rios, Former advisor Joe Biden Moe Vela, and
            several other business titans and luminaries. Cortenraede is
            selected as one of the top innovators in North America in 2022 by
            Sportstech X. He has been featured in Forbes, Yahoo Finance,
            Entrepreneur for his business success.
          </p>
        </div>
      </article>
      <article className={styles.episodes}>
        <div className="container">
          <h2>All episodes</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>EPISODE</th>
                <th>PUBLISHED</th>
                <th>LENGTH</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://i.scdn.co/image/ab6765630000ba8ad3f8fa26fb162d6c3296941d"
                    alt=""
                  />
                </td>
                <td>
                  <h3>LVLup Episode 1 - Danny Cortenraede</h3>
                  <p>
                    For the first episode of the LVLUP Pod, we hosted all-star
                    POGR investor and Venturerock Managing Partner Danny
                    Cortenraede. With decades of experience behind him, Danny
                    has mastered the art of engagement. He knows when to walk
                    away and when to double down, and that’s why he’s so
                    confident POGR’s analytics will power the next generation of
                    games and the Metaverse. Throughout LVLUp’s debut episode,{" "}
                  </p>
                </td>
                <td>March 2, 2023</td>
                <td>46 min, 26 sec</td>
                <td>
                  <img src="https://pogr.gg/static/icons/play.svg" alt="play" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default LvlUp;
