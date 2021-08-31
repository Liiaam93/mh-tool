/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewHannants = ({ newProducts }) => {
  // {newProducts} is the component prop from /about.js
  if (!newProducts) {
    return null;
  }
  if ((newProducts.imageSrc = "/images/test.gif")) {
    newProducts.imageSrc = "/ph.jpg";
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
        {item.brand} {item.scale} {item.name.slice(0, 100)}...
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
  return <div className="flex">{newProductMap}</div>;
};

export default NewHannants;
