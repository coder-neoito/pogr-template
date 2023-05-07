import React from "react";
import styles from "../styles/interest.module.scss";

const InterestCard = ({ data }) => {
  const { image, title, desc } = data;
  return (
    <article className={styles.interestCard}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <hr />
      <p>{desc}</p>
    </article>
  );
};

export default InterestCard;
