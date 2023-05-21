import React from "react";
import { Outlet } from "react-router-dom";
import AddsBar from "./AddsBar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <AddsBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
