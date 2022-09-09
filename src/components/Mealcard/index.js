import React from 'react'
import "./Mealcard.css"

export default function Mealcard({name,url, alt, onClick, id}) {
  return (
    <div className="Mealcard-container" onClick={onClick} id={id}>
      <h3 className="Mealcard-name">{name}</h3>
      <img src={url} alt={alt} className="Mealcard-image"/>
    </div>
  )
}
