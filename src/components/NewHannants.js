/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const NewHannants = ({ newProducts }) => {
  // {newProducts} is the component prop from /about.js

  const [extraInfo, setExtraInfo] = useState(false);

  const toggleInfo = () => {
    if (!extraInfo) {
      setExtraInfo(true);
    } else if (extraInfo) {
      setExtraInfo(false);
    }
  };

  if (!newProducts) {
    return null;
  }
  let newProductMap = newProducts.map((item, index) => (
    <React.Fragment key={index}>
      <div className="containers">
        <img src={item.imageSrc} alt="" className="newImg" />
        <br />
        <button onClick={() => window.open(item.pageSrc, "_blank")}>
          Open in Hannants
        </button>
        <br />
        {item.brand} {item.scale} {item.name.slice(0, 100)}{" "}
        {extraInfo && item.name.slice(100, 500)}
        <button onClick={() => toggleInfo()}>...</button>
        <br />
        <p className="det">
          Price: {item.pricey[1]}
          <br />
          Our Price: {item.ourPrice}
          <br />
          Stock: {item.stock}
          <br />
          Arrival: {item.arrival}
          <br />
          Type: {item.type}
          <br />
          Product Code: {item.code[item.code.length - 1]}
        </p>
      </div>
      <br />
    </React.Fragment>
  ));
  return (
    <>
      <div className="flex">{newProductMap}</div>
    </>
  );
};

export default NewHannants;
