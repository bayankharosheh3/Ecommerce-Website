import React from "react";
import styles from "./styles.module.css"
const ShopCard = ({ shopCard }) => {
  const { cardTitle, cardImg } = shopCard;
  return (
    <div className={styles.shopCard}>
      <div className={styles.imgCont}><img src={cardImg} /></div>
      <div className={styles.type}>{cardTitle}</div>
    </div>
  );
};

export default ShopCard;
