import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedItem1, setSelectedItem1] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
