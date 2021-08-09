import React from "react";
import Image from "next/image";

const Product = ({ productData }) => {
  if (!productData) {
    return null;
  }
  if (!productData.imageSrc) {
    return null;
  }
  const img = productData.imageSrc;
  const ourPrice = (productData.price.replace("£", "") * 0.9).toFixed(2);
  const scale = productData.scale.replace(":", "/");
  return (
    <>
      <img alt="" src={img} width="300px" />
      <br />
      {productData.brand} {scale + " "} {productData.name}
      <br />
      {productData.price} <br />
      Our Price: {ourPrice} <br />
      Stock: {productData.stock} <br />
      {productData.style} <br />
    </>
  );
};

export default Product;
