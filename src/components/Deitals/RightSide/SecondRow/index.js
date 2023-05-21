import React from "react";
import Styles from "./styles.module.css";

const SecondRaw = (  {description}  ) => {
  return (
    <div className={Styles.secondRow}>
      <p className={Styles.descriptionTitle}>Description</p>
      <p className={Styles.description}>
        {description}
      </p>
    </div>
  );
};

export default SecondRaw;
