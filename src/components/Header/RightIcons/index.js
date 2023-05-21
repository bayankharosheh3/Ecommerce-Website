import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../ProductsProvider";
import styles from "./styles.module.css";

const RightIcons = ({ src }) => {
  const { cartProducts, loggedIn } = useContext(ProductsContext);

  const productsNumber = cartProducts.length;
  return (
    <div className={styles.rightIcon}>
      {!loggedIn && (
        <Link className={styles.loginLink} to="login">
          Login
        </Link>
      )}
      {src.map((item, index) => (
        <Link key={index} to={item.to} className={styles.linkIcon}>
          <img src={item.src} className={styles.icons} />
          {item.to == "cart" && productsNumber !== 0 ? (
            <div className={styles.number}>{productsNumber}</div>
          ) : (
            <></>
          )}
        </Link>
      ))}
    </div>
  );
};

export default RightIcons;
