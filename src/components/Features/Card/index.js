import React, { useState } from "react";
import styles from "./styles.module.css";

const Card = ({ images, description, price, isNew,fun ,index}) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.imgCon}>
        <img src={images[0]} />
        <div className={styles.quickBtn}>
          <button onClick={()=>fun(index)}>QUICK VIEW</button>
        </div>
      </div>
      <p>{description}</p>
      <span className={styles.price}>{price}</span>
      <span className={isNew == "new" ? styles.label : styles.empty}>
        {isNew}
      </span>
    </div>
  );
};

export default Card;
