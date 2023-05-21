import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../ProductsProvider";
import CartItem from "./CartItem";
import Style from "./styles.module.css";
const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);

  return (
    <div className={Style.container}>
      <h2>Shopping Cart</h2>
      <div className={Style.basketLabels}>
        <ul className={Style.labels}>
          <li className={Style.item}>Item</li>
          <li className={Style.price}>Price</li>
          <li className={Style.quantity}>Quantity</li>
          <li className={Style.subtotal}>Subtotal</li>
        </ul>
      </div>
      {cartProducts && cartProducts.map((product) => <CartItem {...product} />)}
    </div>
  );
};

export default Cart;
