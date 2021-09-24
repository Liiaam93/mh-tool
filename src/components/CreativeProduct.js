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
    <div className="container">
      <img alt="" src={creativeData.imageSrc} width="300px" />
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
        {creativeData.name
          .replace("\u00A0\u00A0", "")
          .replace("\u00A0", "")
          .replace(":", "/")
          .replace(" - ", " ")}{" "}
        # {creativeData.pCode.replace("\u00A0", "")}
        <br />
        <button onClick={loadPage}>Open in Creative</button>
      </p>
    </div>
  );
};
export default CreativeProduct;
