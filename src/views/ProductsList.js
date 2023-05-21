import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddsBar from "../components/AddsBar";
import FiltersSec from "../components/FiltersSec";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderBackground from "../components/HeaderBackground";
import { ProductsContext } from "../components/ProductsProvider";
import SortBy from "../components/SortBy";

const ProductsList = () => {
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setData(json);
  //       });
  //   }, []);

  const data1 = useContext(ProductsContext);
  const { products } = data1;

  const [sortby, setSortby] = useState('normal');

  return (
    <div>
      {/* <AddsBar />
      <Header /> */}
      {/* <Outlet/> */}
      <HeaderBackground />
      <SortBy sortbyFun={setSortby} sortby={sortby} />
      <FiltersSec data={products} sortby={sortby} />
      {/* <Footer /> */}
    </div>
  );
};

export default ProductsList;
