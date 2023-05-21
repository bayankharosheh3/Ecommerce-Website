import React, { useEffect, useState } from "react";
import Slider from "./../components/Slider";
import Features from "./../components/Features";
import About from "./../components/About";
import Explore from "./../components/Explore";
import Shop from "./../components/Shop";
import Videos from "./../components/Videos";
import Seen from "./../components/Seen";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [cookie, setCookie] = useCookies();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/users/148307", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => {
        setUserData(user.data);
      });
  }, []);

  return (
    <div>
      {/* <Outlet /> */}
      <div className="outerContainer">
        <Slider />
        <div className="container">
          <Features />
          <About />
          <Explore />
          <Shop />
          <Videos />
          <Seen />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
