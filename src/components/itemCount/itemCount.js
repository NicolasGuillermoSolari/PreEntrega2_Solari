import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quality, setQuality] = useState(initial);

  const Increment = () => {
    if (quality < stock) {
      setQuality(quality + 1);
    }
  };
  const Decrement = () => {
    if (quality > 1) {
      setQuality(quality - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={Decrement}></button>
        <h4 className="Number">{quality}</h4>
        <button className="Button" onClick={Increment}></button>
      </div>
      <div>
        <button
          className="Button"
          onClick={() => onAdd(quality)}
          disabled={!stock}
        ></button>
      </div>
    </div>
  );
};

export default ItemCount;
