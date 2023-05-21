import React, { useEffect, useRef, useState } from "react";
import Card from "../../Features/Card";
import QuickView from "../../Features/QuickView";
import Style from "./styles.module.css";

const FilteredProducts = ({ data, selected, sortby }) => {
  // const filteredArray = data;
  const [itemsNumber, setItemsNumber] = useState(4);

  const filteredArray = data.filter((product) => {
    if (selected == "") {
      return product;
    } else return product.category === selected;
  });

  const sortedProducts = filteredArray
    .sort((p1, p2) => {
      if (sortby === "price") {
        return p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0;
      } else if (sortby === "rating") {
        return p1.rating.rate < p2.rating.rate
          ? 1
          : p1.rating.rate > p2.rating.rate
          ? -1
          : 0;
      } else if (sortby === "count") {
        return p1.rating.count < p2.rating.count
          ? 1
          : p1.rating.count > p2.rating.count
          ? -1
          : 0;
      } else return 0;
    })
    .slice(1, itemsNumber);

  const [display, setDisplay] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handelClick = (index) => {
    const selectedItem = sortedProducts[index];
    setSelectedItem(selectedItem);
    setDisplay(!display);
  };

  const exitClick=()=>{
    setDisplay(false);
  }


  return (
    <div className={Style.mainContainer}>
      <div className={Style.container}>
        {sortedProducts.map((product, index) => {
          return (
            <Card
              images={[product.images[0]]}
              description={product.description}
              price={product.price}
              isNew={""}
              index={index}
              key={index}
              fun={handelClick}
            />
          );
        })}
      </div>

      <button
        className={Style.loadBtn}
        onClick={() => {
          setItemsNumber(filteredArray.length);
        }}
      >
        <img src="./assets/icons/shape.png" className={Style.loadImg} />
        loading
      </button>
      {display && <QuickView {...selectedItem} onclick={exitClick} />}
    </div>
  );
};

export default FilteredProducts;
