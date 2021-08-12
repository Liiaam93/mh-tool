/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useState } from "react";

const CreativeProduct = ({ creativeData }) => {
  const loadPage = () => {
    window.open(creativeData.pageSrc, "_blank");
  };
  if (!creativeData) {
    return null;
  }
  return (
    <>
      <img alt="" src={creativeData.imgSrc} width="300px" />
      <br />
      Price: {creativeData.price} <br />
      <p>Stock: {creativeData.stock} </p>
      <p>
        {creativeData.name}#{creativeData.pCode}
        <br />
        <button onClick={loadPage}>Open in Creative</button>
      </p>
    </>
  );
};
export default CreativeProduct;
