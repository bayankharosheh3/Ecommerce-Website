import React from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../components/ProductsProvider";
import { useContext } from "react";
import Details from "../components/Deitals";

const ProductDetails = () => {
  const { productID } = useParams();
  console.log(productID);
  const data = useContext(ProductsContext);
  const { products } = data;

  console.log(data);
  return (
    <div>
      <Details {...products[productID]} />
    </div>
  );
};

export default ProductDetails;
