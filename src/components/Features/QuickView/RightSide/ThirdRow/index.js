import React from "react";
import Styles from "./styles.module.css";

const ThirdRow = ({category,stock,brand}) => {
  return (
    <div className={Styles.thirdRow}>
      <div className={Styles.div1}>
        <h5>Brand</h5>
        <span>{brand}</span>
      </div>
      <div className={Styles.div1}>
        <h5>Category</h5>
        <span>{category}</span>
      </div>
      <div className={Styles.div1}>
        <h5>Stock</h5>
        <span>{stock}</span>
      </div>
    </div>
  );
};

export default ThirdRow;
