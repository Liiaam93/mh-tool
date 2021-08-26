/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import Collapse from "./Collapse";

export const post = atom({
  key: "post",
  default: "",
});
const Product = ({ productData }) => {
  const [postage, setPostage] = useRecoilState(post);
  const [imageSRC, setImage] = useState(productData.imageSrc);

  if (!productData) {
    return null;
  }
  if (!productData.imageSrc) {
    return null;
  }
  let img = productData.imageSrc;

  const openSite = () => {
    window.open(
      "https://www.hannants.co.uk/product/" + productData.pCode,
      "_blank"
    );
  };

  const scale = productData.scale.replace(":", "/");
  return (
    <div className="container">
      <img alt="" src={img} width="300px" className="pImg" /> {""}
      <Collapse>
        {productData.imageSrc2 && (
          <img
            alt=""
            src={productData.imageSrc2}
            width="300px"
            className="pImg"
          />
        )}{" "}
        {productData.imageSrc3 && (
          <img
            alt=""
            src={productData.imageSrc3}
            width="300px"
            className="pImg"
          />
        )}{" "}
        {productData.imageSrc4 && (
          <img
            alt=""
            src={productData.imageSrc4}
            width="300px"
            className="pImg"
          />
        )}
      </Collapse>{" "}
      <p>
        <span className="red">Price:</span> {productData.price}
      </p>
      <p>
        <span className="red">Our Price: </span>£{productData.ourPrice}
      </p>
      <p>{postage}</p>
      <button
        onClick={() =>
          setPostage(
            "Price with postage: £" +
              (Number(productData.ourPrice) + 2.46).toFixed(2)
          )
        }
      >
        + Postage (£2.46)
      </button>{" "}
      <button
        onClick={() =>
          setPostage(
            "Price with postage: £" +
              (Number(productData.ourPrice) + 2.75).toFixed(2)
          )
        }
      >
        + Postage (£2.75)
      </button>{" "}
      <button
        onClick={() =>
          setPostage(
            "Price with postage: £" +
              (Number(productData.ourPrice) + 6).toFixed(2)
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
