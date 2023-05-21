import React from "react";
import Style from "./styles.module.css";

const SortBy = ({ sortbyFun, sortby }) => {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.container}>
        {/* <h2 className={Style.category}>Apparels</h2> */}
          <span className={Style.sortSpan}>Sort by</span>
          <select
            name="sort"
            id="sort"
            className={Style.sortOptions}
            value={sortby}
            onChange={(e) => {
              sortbyFun(e.target.value);
            }}
          >
            <option value="price">price</option>
            <option value="rating">rating</option>
            <option value="count">name</option>
          </select>
      </div>
    </div>
  );
};

export default SortBy;
