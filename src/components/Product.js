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

  return (
    <div>
      <img alt="" src={img} width="300px" />
      <br />
      {productData.brand} {productData.scale + " "} {productData.name}
      <br />
      {productData.price} <br />
      {productData.stock} <br />
      {productData.style}
    </div>
  );
};

export default Product;
