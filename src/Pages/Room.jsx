import React from 'react'
import { useParams } from 'react-router-dom'
import { hotelContext } from '../components/HotelProvider'
import { useContext } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Room() {
    let {id} = useParams()
    let {infoHotel} = useContext(hotelContext)
    console.log(infoHotel)
    let {imagen,type,price,beds,dimentions,includes,freeRoom} = infoHotel[id]
  return (
    <>
    <Header/>
    <Nav/>
    <div className='flexin'>
      <div class="w3-third w3-margin-bottom item animate__animated animate__backInLeft">
      <img src={imagen[0]} alt="Norway" className='imagenPrincipal'/>
      <img src={imagen[2]} alt="Norway" className='imagenPrincipal'/>
      
      <div class="w3-container w3-white">
        <h3>{type}</h3>
        <h6 class="w3-opacity">From: {price}</h6>
        <p>{beds}</p>
        <p>{dimentions}<sup>2</sup></p>
        <p class="w3-large"><i class={`fa fa-${includes[0]}`}></i> <i class={`fa fa-${includes[1]}`}></i> <i class={`fa fa-${includes[2]}`}></i> <i class={`fa fa-${includes[3]}`}></i> <i class={`fa fa-${includes[4]}`}></i> <i class={`fa fa-${includes[5]}`}></i></p>
        <p>Disponibilidad: {freeRoom}</p>
      </div>
    </div>
    
    <div class="w3-col m2 animate__animated animate__fadeInDown">
      <label><i class="fa fa-calendar-o"></i> Check In</label>
      <input class="w3-input w3-border checkin" type="date" placeholder="DD MM YYYY" required/>
    </div>
    <div class="w3-col m2 animate__animated animate__fadeInUp">
      <label><i class="fa fa-calendar-o"></i> Check Out</label>
      <input class="w3-input w3-border checkout" type="date" placeholder="DD MM YYYY" required/>
    </div>
    <div class="w3-col m1 animate__animated animate__fadeInDown">
      <label><i class="fa fa-male"></i> Adults</label>
      <input class="w3-input w3-border Adults" type="number" placeholder="0" required/>
    </div>
    <div class="w3-col m1 animate__animated animate__fadeInUp">
      <label><i class="fa fa-child "></i> Kids</label>
      <input class="w3-input w3-border Kids" type="number" placeholder="0"/>
    </div>
    <div class="w3-col m1 animate__animated animate__fadeInDown">
      <label>Request</label>
      <button class="w3-button w3-block w3-black" type='submit'>Request</button>
    </div>
    </div>
   <Footer/>
    </>
  )
}

export default Room
