/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Product = ({ productData }) => {
  const [postage, setPostage] = useState();

  if (!productData) {
    return null;
  }
  if (!productData.imageSrc) {
    return null;
  }
  const img = productData.imageSrc;

  let ourPrice = (productData.price.replace("£", "") * 0.9).toFixed(2);

  const scale = productData.scale.replace(":", "/");
  return (
    <>
      <img alt="" src={img} width="300px" />
      <br />
      Price: {productData.price} <br />
      Our Price:
      <span className="green"> £{ourPrice}</span>
      <p className="green">{postage}</p>
      <button
        onClick={() =>
          setPostage(
            "Price with postage: £" + (Number(ourPrice) + 2.46).toFixed(2)
          )
        }
      >
        + Postage (£2.46)
      </button>{" "}
      <button
        onClick={() =>
          setPostage(
            "Price with postage: £" + (Number(ourPrice) + 2.75).toFixed(2)
          )
        }
      >
        + Postage (£2.75)
      </button>{" "}
      <button
        onClick={() =>
          setPostage(
            "Price with postage: £" + (Number(ourPrice) + 6).toFixed(2)
          )
        }
      >
        + Postage (£6)
      </button>
      <p>Stock: {productData.stock} </p>
      <p>
        {productData.brand} {scale + " "} {productData.name}{" "}
      </p>
      <p>Type: {productData.style} </p>
    </>
  );
};

export default Product;
