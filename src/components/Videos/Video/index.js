import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Video = ({ data }) => {
  const { imgUrl, para } = data;
  return (
    <div className={styles.videoStyle}>
      <img src={imgUrl} />
      <div className={styles.run}>
        <FontAwesomeIcon icon={faCaretRight} className={styles.videoIcon} />
      </div>
      <div className={styles.videoDes}>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Video;
