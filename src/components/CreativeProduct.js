/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useState } from "react";

const CreativeProduct = ({ creativeData }) => {
  const [postage, setPostage] = useState();

  const loadPage = () => {
    window.open(creativeData.pageSrc, "_blank");
  };
  if (!creativeData) {
    return null;
  }
  if (!creativeData.price) {
    return null;
  }
  let ourPrice = (creativeData.price.replace("£", "") * 0.9).toFixed(2);
  let name = creativeData.name.replace(/nbsp;/g, "");
  return (
    <>
      <img alt="" src={creativeData.imgSrc} width="300px" />
      <br />
      Price: {creativeData.price} <br />
      Our Price: {ourPrice} <br />
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
            "Price with postage: £" + (Number(ourPrice) + 6.0).toFixed(2)
          )
        }
      >
        + Postage (£6)
      </button>
      <br />
      <p>Stock: {creativeData.stock} </p>
      <p>
        {creativeData.name.replace(/&nbsp;/, "")}#
        {creativeData.pCode.replace(/&nbsp;/, "")}
        <br />
        <button onClick={loadPage}>Open in Creative</button>
      </p>
    </>
  );
};
export default CreativeProduct;
