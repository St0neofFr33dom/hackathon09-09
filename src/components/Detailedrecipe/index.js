import React from 'react'
import "./Detailed.css"
export default function Detailedrecipe({name,image,closeModal}) {
  return (
    < div id="myModal" className="modal">
    <div className="modal-content">
    <span className="close" onClick={closeModal}>&times;</span>
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    <h1>Hello from the Modal</h1>
  </div>
  </div>
  )
}
