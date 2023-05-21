import React from "react";
import Title from "../Title";
import styles from"./styles.module.css";

const About = () => {
  const src = "./assets/images/5.png";
  const title ="about matter"
  return (
    <section className={styles.aboutSec}>
      <Title titleIs={title}/>
      <div className={styles.aboutContent}>
        <img src={src} />
        <div className={styles.aboutText}>
          <p className={styles.mission}>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
          <p className={styles.artisan}>Artisan Employment Days Created</p>
          <span>123456</span>
          <p className={styles.Countries}>Countries Involved To Date</p>
          <ul className={styles.Country}>
            <li>India</li>
            <li>China</li>
            <li>Sri Lanka</li>
          </ul>
          <p class={styles.tribes}>#MatterTribe</p>
          <ul class={styles.tribe}>
            <li >12 designers</li>
            <li>12 Factories</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
