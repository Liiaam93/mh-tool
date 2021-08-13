/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewHannants = ({ newProducts }) => {
  // {newProducts} is the component prop from /about.js
  if (!newProducts) {
    return null;
  }
  let newProductMap = newProducts.map((item, index) => (
    <React.Fragment key={index}>
      <div className="containers">
        <img src={item.imageSrc2} alt="" className="newImg" />
        <br />
        <button onClick={() => window.open(item.pageSrc, "_blank")}>
          Open in Hannants
        </button>
        <br />
        {item.brand} {item.scale} {item.name2.slice(0, 100)}
        <br />
        <p className="det">
          Price: {item.price}
          <br />
          Our Price: {(item.price.replace("£", "") * 0.9).toFixed(2)}
          <br />
          Stock: {item.stock}
          <br />
          Arrival: {item.arrival}
          <br />
          Type: {item.type}
          <br />
          Product Code: {item.code[item.code.length - 2]}
        </p>
      </div>
      <br />
    </React.Fragment>
  ));
  return <div className="flex">{newProductMap}</div>;
};

export default NewHannants;
