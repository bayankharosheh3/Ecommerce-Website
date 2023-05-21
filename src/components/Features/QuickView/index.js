import React from "react";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styles from "./styles.module.css";
const QuickView = ({
  title,
  images,
  description,
  price,
  rating,
  stock,
  brand,
  category,
  id,
  onclick,
}) => {
  return (
    <div className={styles.layer}>
      <div className={styles.quickView}>
        <div className={styles.top}>
          <h4>{title}</h4>
          <button onClick={onclick}>
            <p>X</p>
          </button>
        </div>
        <div className={styles.quickContent}>
          <LeftSide images={images} />
          <RightSide
            title={title}
            description={description}
            price={price}
            rating={rating}
            stock={stock}
            brand={brand}
            category={category}
            id={id}
          />
        </div>
        <Link className={styles.fullBtn} to={`${id}`}>
          View Full product Details
        </Link>
      </div>
    </div>
  );
};

export default QuickView;
