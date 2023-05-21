import styles from "./styles.module.css";
import LeftIcons from "./LeftIcons";
import RightIcons from "./RightIcons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const toggle = () => {
    setIsActive((current) => !current);
  };

  const matterSrc = "./assets/images/matter.jpg";
  const iconsSrc = [
    { src: "./assets/icons/search.svg", to: "/" },
    { src: "./assets/icons/heart.svg", to: "/" },
    { src: "/assets/icons/shape.svg", to: "cart" },
  ];
  const h2List = [
    { name: "Home", to: "/" },
    { name: "Products List", to: "productsList" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <Link to="/">
            <img src={matterSrc} className={styles.matterIcon} />
          </Link>
          <div
            className={isActive ? styles.leftIcon : styles.dNone}
            id="leftIcon"
          >
            <LeftIcons hList={h2List} />{" "}
          </div>
        </div>
        <div className={styles.rightSide}>
          <RightIcons src={iconsSrc} />
        </div>
        <button className={styles.menuBtn} onClick={toggle}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
