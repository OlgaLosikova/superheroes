import React from "react";
import StarRating from "../StarRating/StarRating";
import styles from "./Card.module.css";

const Card = (props) => {
  const {title, description, imgLink, alt} = props;
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <h2>{title}</h2>
        <p className={styles.text}>{description}</p>
        <img className={styles.img} src={imgLink} alt={alt} />
      </div>
      <StarRating />
    </div>
  );
};

export default Card;
