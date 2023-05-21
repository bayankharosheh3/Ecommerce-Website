import React, { useState,useRef } from "react";
import Styles from "./styles.module.css";

const LeftSide = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  const btnRef = useRef();

  const handelClick = (im) => {
    setSelected(im)
    // btnRef.current.focus();
  };
  return (
    <div className={Styles.leftSide}>
      <div className={Styles.imgs}>
        <div className={Styles.imgContainer}>
          {images.map((im,index) => {
            return (
              <button onClick={()=>handelClick(im)} className={Styles.selected}>
                <img src={im} />
              </button>
            );
          })}
        </div>
      </div>
      <div className={Styles.selectedImg}>
        <img src={selected} />
      </div>
    </div>
  );
};

export default LeftSide;
