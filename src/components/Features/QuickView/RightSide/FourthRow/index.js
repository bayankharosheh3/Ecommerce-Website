import React, { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../../../ProductsProvider";
import Styles from "./styles.module.css";
const ForthRow = ({ id }) => {
  const [quantity, setQuantity] = useState(1);

  const { cartProducts, setCartProducts, products } =
    useContext(ProductsContext);

  const handelClickPlus = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handelClickMinus = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const handelClickAdd = () => {
    const product = products.find((product) => {
      if (product.id === id) return product;
    });

    const newProduct = { ...product, quantity: quantity };
    const newArray = [...cartProducts, newProduct];
    setCartProducts(newArray)
    console.log(cartProducts)
  };

  return (
    <div className={Styles.forthRow}>
      <h6>Quantity</h6>
      <div className={Styles.btns}>
        <div className={Styles.plus}>
          <button className={Styles.minusPlus} onClick={handelClickPlus}>
            +
          </button>
          <span>{quantity}</span>
          <button className={Styles.minusPlus} onClick={handelClickMinus}>
            -
          </button>
        </div>
        <button className={Styles.addBtn} onClick={handelClickAdd}>
          Add to cart
        </button>
        <div className={Styles.wishList}>
          <span>?</span>
          <button>Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ForthRow;
