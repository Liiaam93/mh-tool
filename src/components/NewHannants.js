import React from "react";

const NewHannants = ({ newProducts }) => {
  if (!newProducts) {
    return null;
  }
  return newProducts.map((item, index) => (
    <React.Fragment key={index}>
      <div className="container">
        {item.name} {item.scale} {item.desc}
        <br />
        <img src={item.img} alt="" className="newImg" />
        <br />
        Price: {item.price}
        <br />
        Stock: {item.stock}
        <br />
        Arrival: {item.arrival}
        <br />
        {item.type}
      </div>
      <br />
    </React.Fragment>
  ));
};

export default NewHannants;
