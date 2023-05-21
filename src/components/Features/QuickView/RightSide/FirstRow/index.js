import React from "react";
import Styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const FirstRow = ({rating,price}) => {
  return (
    <div className={Styles.firstRow}>
      <div className={Styles.priceRate}>
        <div className={Styles.price}>
          <span className={Styles.priceCoin}>SGD</span>
          <span className={Styles.priceValue}> {price}</span>
        </div>
        <div className={Styles.rate}>
          <div>
            <FontAwesomeIcon icon={faStar} className={Styles.stars}/>
            <FontAwesomeIcon icon={faStar} className={Styles.stars}/>
            <FontAwesomeIcon icon={faStar} className={Styles.stars}/>
            <FontAwesomeIcon icon={faStar} className={Styles.stars}/>
            <FontAwesomeIcon icon={faStar} className={Styles.stars}/>
          </div>
          <div className={Styles.rateValue}>{rating} of 5</div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
