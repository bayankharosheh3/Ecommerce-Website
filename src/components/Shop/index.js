import React from "react";
import Title from "../Title";
import ShopCard from "./ShopCard";
import styles from "./styles.module.css"

const Shop = () => {
  const title ="shop"
   const shopCards=[
    {
      cardTitle:"Pants",
      cardImg:"./assets/images/8.png"
    },
    {
      cardTitle:"Jumpsuits",
      cardImg:"./assets/images/21.png"
    },
    {
      cardTitle:"Tops",
      cardImg:"./assets/images/22.png"
    },
    {
      cardTitle:"Accessories",
      cardImg:"./assets/images/23.png"
    },
   ]
  return (
    <div className={styles.shopSec}>
      <Title titleIs={title}/>
      <div className={styles.shopCards}>
        {shopCards.map(card => {
          return <ShopCard shopCard = {card}/>
        })}
        
      </div>
    </div>
  );
};

export default Shop;
