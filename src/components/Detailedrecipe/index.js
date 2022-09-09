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
}) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <ul>
          {dairyfree && <li>dairyfree</li>}
          <li>gluten free</li>
          <li>vegan</li>
          <li>vegetarian</li>
        </ul>
      </div>
    </div>
  );
}
