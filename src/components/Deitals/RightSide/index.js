import React from "react";
import FirstRow from "./FirstRow";
import ForthRow from "./FourthRow";
import SecondRaw from "./SecondRow";
import Styles from "./styles.module.css";
import ThirdRow from "./ThirdRow";

const RightSide = ({
  title,
  description,
  price,
  rating,
  stock,
  brand,
  category,
  id,
}) => {
  return (
    <div className={Styles.rightSide}>
      <h5>{title}</h5>
      <FirstRow price={price} rating={rating} />
      <SecondRaw description={description} />
      <ThirdRow stock={stock} brand={brand} category={category} />
      <ForthRow id={id}/>
    </div>
  );
};

export default RightSide;
