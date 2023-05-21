import React from "react";
import Style from "./styles.module.css";

const Filter = ({ data, select }) => {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
  ];

  const handelClick = (category) => {
    select(category);
  };

  return (
    <div className={Style.container}>
      <div className={Style.headContainer}>
        <span className={Style.span1}>Filters</span>
        <button className={Style.span2} onClick={() => handelClick("")}>
          Reset
        </button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={Style.selectCategory}
              onClick={() => handelClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
