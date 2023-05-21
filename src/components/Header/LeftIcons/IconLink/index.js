import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const IconLink = ({ listItem, to }) => {
  return (
    <Link to={to} className={styles.iconLink}>
      <span>{listItem}</span>
      <FontAwesomeIcon icon={faAngleDown} className="aws-icon" />
    </Link>
  );
};

export default IconLink;
