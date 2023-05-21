import axios from "axios";
import React, { Component, useState } from "react";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ProductsContext } from "../ProductsProvider";
import Style from "./styles.module.css";

const LogInForm = () => {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState({ email: "", password: "" });
  const [cookies, setCookie] = useCookies();
  const [toHome, setToHome] = useState(false);
  const [error, setError] = useState("");

  const {setLoggedIn} = useContext(ProductsContext);


  const handelChange = (key, value) => {
    setLogIn({ ...logIn, [key]: value });
  };

  if (toHome == true) {
    return <Navigate to="/" />;
  }

  const handelClick = async () => {
    const response = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      logIn
    );

    if (response.data.data !== null) {
      setCookie("token", response.data.data.Token);
      setCookie("name", response.data.data.Name);
      setToHome(true);
      setLoggedIn(true)
    } else {
      setError(response.data.message);
    }
  };

  return (
    <div className={Style.form}>
      <div className={Style.container}>
        <div className={Style.row}>
          <img
            className={Style.logoImg}
            src="./assets/images/matter.jpg"
            alt="logo"
          />
        </div>
        <p className={Style.desc}>Sign in to your account please!</p>
        <div className={Style.column}>
          <label className={Style.inputLabel} htmlFor="inputEmail">
            email
          </label>
          <input
            className={Style.inputContent}
            value={logIn.email}
            id="inputEmail"
            type="email"
            placeholder="Enter email"
            onChange={(e) => handelChange("email", e.target.value)}
          />
        </div>
        <div className={Style.column}>
          <label className={Style.inputLabel} htmlFor="inputPass">
            Password
          </label>
          <input
            className={Style.inputContent}
            value={logIn.password}
            id="inputPass"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => handelChange("password", e.target.value)}
          />
        </div>
        <div className={Style.linkContainer}>
          <Link className={Style.link}>Forget password?</Link>
        </div>
        <div style={{ color: "red" }}>{error}</div>
        <button className={Style.btn} onClick={handelClick}>
          Sign in
        </button>
        <div className={Style.moveTo}>
          <span>Don't have an account?</span>
          {"  "}
          <Link className={Style.link}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
