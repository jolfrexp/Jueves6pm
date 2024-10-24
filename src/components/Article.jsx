import React from 'react'
import { Link } from 'react-router-dom'

function Article({habitacion,id}) {
// style=""
  return (
    <>
    <div class="w3-third w3-margin-bottom item">
      <img src={habitacion.imagen[0]} alt="Norway" className='imagenPrincipal'/>
      <div class="w3-container w3-white">
        <h3>{habitacion.type}</h3>
        <h6 class="w3-opacity">From: {habitacion.price}</h6>
        <p>{habitacion.beds}</p>
        <p>{habitacion.dimentions}<sup>2</sup></p>
        <p class="w3-large"><i class={`fa fa-${habitacion.includes[0]}`}></i> <i class={`fa fa-${habitacion.includes[1]}`}></i> <i class={`fa fa-${habitacion.includes[2]}`}></i> <i class={`fa fa-${habitacion.includes[3]}`}></i> <i class={`fa fa-${habitacion.includes[4]}`}></i> <i class={`fa fa-${habitacion.includes[5]}`}></i></p>
        <p>Disponible desde: {habitacion.freeRoom}</p>
        <Link to={`/Room/${id}`} class="w3-button w3-block w3-black w3-margin-bottom">Choose Room</Link>
      </div>
    </div>
    </>
  )
}

export default Article
