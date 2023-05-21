import React from "react";
import Style from "./styles.module.css";

const HeaderBackground = () => {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.container}>
        <h2 className={Style.title}>Apparels</h2>
        <p className={Style.desc}>
          White Gold began gaining popularity in the early 1900’s as an
          alternative to platinum.
        </p>
      </div>
      {/* <div className={Style.imgContainer}>
        <img src="./assets/images/16.png" />
      </div> */}
    </div>
  );
};

export default HeaderBackground;
