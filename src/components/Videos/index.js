import React from "react";
import Title from "../Title";
import styles from "./styles.module.css";
import Video from "./Video";

const Videos = () => {
  const title = "Recommended Videos";
  const videoData = [
    { imgUrl: "./assets/images/9.png", para: "Jamdani" },
    { imgUrl: "./assets/images/24.png", para: "Lorem ipsum dolor sit amet" },
    { imgUrl: "./assets/images/25.png", para: "Lorem ipsum dolor sit amet" },
  ];
  return (
    <section className={styles.videosSec}>
      <Title titleIs={title} />
      <div className={styles.videosContent}>
        {videoData.map(video=> <Video data={video} />)}
      </div>
      <button>Show more</button>
    </section>
  );
};

export default Videos;
