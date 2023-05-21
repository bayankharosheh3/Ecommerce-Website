import React from "react";
import styles from "./styles.module.css";

const Slider = () => {
  const src = "./assets/images/2.png";
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${src})` }}>
      <button className={`${styles.left} ${styles.slideBtn}`}>
        <img src="./assets/images/12.png" />
      </button>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderContent}>
          <h1>Perfume Tips Tricks</h1>
          <a>Shop Now</a>
          <div className={styles.line}></div>
        </div>
      </div>
      <button className={`${styles.right} ${styles.slideBtn}`}>
        <img src="./assets/images/11.png" />
      </button>
    </div>
  );
};

export default Slider;
