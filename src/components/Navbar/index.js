import React from 'react'
import Basket from '../Basket'
import Hamburger from '../Hamburger'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="navbar">
      <img src="../../../public/logo192.png" alt="Logo"/>
      <h1>Italian Restuarant</h1>
      <Hamburger />
      <Basket />
    </div>
  )
}
