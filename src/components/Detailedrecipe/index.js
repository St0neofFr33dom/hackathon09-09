import React from "react";
import "./Detailed.css";
export default function Detailedrecipe({
  name,
  image,
  closeModal,
  dairyfree,
  glutenfree,
  vegan,
  vegetarian,
  price,
}) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <h3>Dietary Requirements</h3>
        <ul>
          {dairyfree && <li>Dairy Free</li>}
          {glutenfree && <li>Gluten Free</li>}
          {vegan && <li>Vegan</li>}
         {vegetarian && <li>Vegetarian</li>}
        </ul>
        <h3>Price : £{((price/100)*4).toFixed(2)}</h3>
      </div>
    </div>
  );
}
