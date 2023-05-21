import React, { useState } from "react";
import styles from "./styles.module.css";
const Footer = () => {
  const [email, setEmail] = useState("");
  const categoriesArray = [
    "About us",
    "Testimonials",
    "Contact",
    "Journal",
    "Privacy Policy",
  ];
  const partnersArray = [
    "Support",
    "Shipping & Returns",
    "Size Guide",
    "Product Care",
  ];
  return (
    <section className={styles.footerSec}>
      <div className={styles.containerFooter}>
        <div className={styles.footerContent}>
          <div className={styles.categories}>
            <h3>Categories</h3>
            <div className={styles.footerText}>
              {categoriesArray.map((item, index) => {
                return (
                  <div key={index}>
                    {item}
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.partners}>
            <h3>Partners</h3>
            <div className={styles.footerText}>
              {partnersArray.map((item, index) => {
                return (
                  <div key={index}>
                    {item}
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.contactUs}>
            <h3>Contact us</h3>
            <div className={styles.footerText}>
              <div>26A Pagoda St, TANGS, Singapore, 058187</div>
              <div>+65 6221 5462</div>
            </div>
          </div>
          <div className={styles.subscribe}>
            <h3>Subscribe to newsletter</h3>
            <div className={styles.inter}>
              <input
                type={"text"}
                placeholder={"Subscribe to newsletter"}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <button>Subscribe</button>
            </div>
            <div className={styles.socialIcon}>
              <img src="./assets/icons/Facebook.svg" />
              <img src="./assets/icons/Twitter.svg" />
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>© Copyright Matter PTE LTD 2017</div>
      </div>
    </section>
  );
};

export default Footer;
