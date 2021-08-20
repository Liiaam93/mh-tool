/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";

export const post = atom({
  key: "post",
  default: "",
});
const Product = ({ productData }) => {
  const [postage, setPostage] = useRecoilState(post);

  if (!productData) {
    return null;
  }
  if (!productData.imageSrc) {
    return null;
  }

  const img = productData.imageSrc;

  const openSite = () => {
    window.open(
      "https://www.hannants.co.uk/product/" + productData.pCode,
      "_blank"
    );
  };

  let cost;
  let brand = productData.brand;
  if (
    brand === "SBS Model" ||
    brand === "PJ Productions" ||
    brand === "Echelon FD" ||
    brand === "AML" ||
    brand === "Clear Prop Models" ||
    brand === "Copper State Models" ||
    brand === "Merit" ||
    brand === "FLY" ||
    brand === "Yahu Models" ||
    brand === "Infinity Model" ||
    brand === "Lima November" ||
    brand === "Peewit" ||
    brand === "Dead Design Models" ||
    brand === "HGW" ||
    brand === "ResKit" ||
    brand === "I LOVE KIT" ||
    brand === "Milspec"
  ) {
    cost = 1.21;
  } else {
    cost = 0.9;
  }
  let ourPrice = (productData.price.replace("£", "") * cost).toFixed(2);

  const scale = productData.scale.replace(":", "/");
  return (
    <div className="container">
      <img alt="" src={img} width="300px" className="pImg" />
      <br />
      <br />
      <p>
        <span className="red">Price:</span> {productData.price}
      </p>
      <p>
        <span className="red">Our Price: </span>£{ourPrice}
      </p>
      <p>{postage}</p>
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
      <p>
        <span className="red">Stock:</span> {productData.stock}{" "}
      </p>
      <p>
        {productData.brand} {scale + " "} {productData.name}{" "}
      </p>
      <p>
        <span className="red">Type: </span>
        {productData.style}{" "}
      </p>
      <button onClick={openSite}>Open in Hannants</button>
    </div>
  );
};

export default Product;
