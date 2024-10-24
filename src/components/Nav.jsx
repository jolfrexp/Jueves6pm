import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div>
      <div class="w3-bar w3-white w3-large">
        <Link to="/" class={`w3-bar-item w3-button ${props.home} w3-mobile`}><i class="fa fa-bed w3-margin-right"></i>Home</Link>
        <Link to="/Rooms" class={`w3-bar-item w3-button ${props.rooms} w3-mobile`}>Rooms</Link>
        <Link to="/About" class={`w3-bar-item w3-button ${props.about} w3-mobile`}>About</Link>
        <Link to="/Contact" class={`w3-bar-item w3-button ${props.contact} w3-mobile`}>Contact</Link>
        <Link to="/Contact" class="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</Link>
        </div>
    </div>
  )
}

export default Nav
