import React from "react";
import styles from "../styles/podcastTable.module.scss";
import { podcasts } from "@/data";

const PodcastTable = () => {
  return (
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
            {podcasts.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt={p.title} />
                </td>
                <td>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </td>
                <td>{p.createdAt}</td>
                <td>{p.length}</td>
                <td>
                  <img src="https://pogr.gg/static/icons/play.svg" alt="play" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default PodcastTable;
