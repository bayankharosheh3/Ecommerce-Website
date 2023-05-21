import React from "react";
import styles from "./styles.module.css";

const ExploreCard = ({ exploreCard, fontS, lineH }) => {
  const { date, cardTitle, cardDescription, imgUrl } = exploreCard;
  return (
    <div className={styles.exploreCard}>
      <div className={styles.textCont}>
        <div className={styles.line}></div>
        <p className={styles.date}>{date}</p>
        <h3 style={{ fontSize: fontS, lineHeight:lineH }}>{cardTitle}</h3>
        {cardDescription != "" && (
          <p className={styles.explorePar}>{cardDescription}</p>
        )}
      </div>
      <div className={styles.imgCont}>
        {imgUrl != "" && <img src={imgUrl} />}
      </div>
    </div>
  );
};

export default ExploreCard;
