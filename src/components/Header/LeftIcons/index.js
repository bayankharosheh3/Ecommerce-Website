import React from "react";
import IconLink from "./IconLink";
import styles from "./styles.module.css";

const LeftIcons = ({ hList }) => {
  return (
    <div className={styles.leftIcon}>
      {hList.map((item, index) => (
        <IconLink listItem={item.name} key={index} to={item.to} />
      ))}
    </div>
  );
};

export default LeftIcons;
