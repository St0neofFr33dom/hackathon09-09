import React from 'react'
import Basket from '../Basket'
import Hamburger from '../Hamburger'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={require("../../assets/logo192.png")} alt="Logo"/>
      <div className="navbar_child">
      <img src={require("../../assets/hamburger.jpeg")} alt="hambuger menu"/>
      <img src={require("../../assets/basket.png")} alt="basket"/>
      </div>
    </div>
  )
}
