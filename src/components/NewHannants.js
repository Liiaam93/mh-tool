/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewHannants = ({ newProducts }) => {
  if (!newProducts) {
    return null;
  }

  let newProductMap = newProducts.map((item, index) => (
    <React.Fragment key={index}>
      <div className="containers">
        <img
          src={item.img.replace("thumbs", "pics") || ""}
          alt=""
          className="newImg"
        />{" "}
        <img
          src={item.img.replace("thumbs", "pics").replace("jpg", "JPG") || ""}
          alt=""
          className="newImg"
        />
        <br />
        {item.name} {item.scale} {item.desc.slice(0, 100)}
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
          {item.type}
        </p>
      </div>
      <br />
    </React.Fragment>
  ));

  return <div className="flex">{newProductMap}</div>;
};

export default NewHannants;
