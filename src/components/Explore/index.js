import React from "react";
import styles from "./styles.module.css";
import ExploreCard from "./ExploreCard";
import Title from "../Title";

const Explore = () => {
  const title = "explore";
  const mainCard = {
    date: "FIELDTESTED. JANUARY 19, 2017",
    cardTitle: "Connected Clothing: Raye Padit",
    cardDescription:
      "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
    imgUrl: "./assets/images/6.png",
  };

  const exploreCard = [
    {
      date: "FIELDTESTED. JANUARY 19, 2017",
      cardTitle: "Kérastase: A Collaboration",
      cardDescription: "",
      imgUrl: "./assets/images/7.png",
    },
    {
      date: "FIELDTESTED. JANUARY 19, 2017",
      cardTitle: "Jaclynn Seah",
      cardDescription:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
      imgUrl: "",
    },
    {
      date: "FIELDTESTED. JANUARY 19, 2017",
      cardTitle: "Remarkable Resilience: Grace Kim",
      cardDescription:
        "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
      imgUrl: "",
    },
    {
      date: "FIELDTESTED. JANUARY 19, 2017",
      cardTitle: "How To Wear The Lounge Lunghi",
      cardDescription: "",
      imgUrl: "./assets/images/20.png",
    },
  ];

  return (
    <section className={styles.exploreSec}>
      <Title titleIs={title} />
      <div className={styles.exploreContent}>
        <div className={styles.exploreLeft}>
          <ExploreCard exploreCard={mainCard} />
        </div>
        <div className={styles.exploreRight}>
          {exploreCard.map((card) => {
            return (
              <div className={styles.eCard}>
                <ExploreCard exploreCard={card} fontS='24px' lineH="35px" />
              </div>
            );
          })}
        </div>
      </div>
      <button>See the journal</button>
    </section>
  );
};

export default Explore;
