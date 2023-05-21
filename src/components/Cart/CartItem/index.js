import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../ProductsProvider";
import Style from "./styles.module.css";

const CartItem = ({ price, quantity, images, id }) => {
  const { cartProducts, setCartProducts, products } =
    useContext(ProductsContext);

  const handleRemove = () => {
    const filtered = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filtered);
  };

  return (
    <div className={Style.itemRow}>
      <div className={Style.item}>
        <div className={Style.productImage}>
          <img src={images[0]} alt="Placholder Image 2" class="product-frame" />
        </div>
        <div className={Style.productDetails}>
          <p>Product Code - 232321939</p>
        </div>
      </div>
      <div className={Style.price}>{price}</div>
      <div className={Style.quantity}>
        <input
          type="number"
          value={quantity}
          min="1"
          className={Style.quantityField}
        />
      </div>
      <div className={Style.subtotal}>{price * quantity}</div>
      <div className={Style.remove}>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
