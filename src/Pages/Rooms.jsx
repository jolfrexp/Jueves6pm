import React from 'react'
import Content from '../components/Content'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Rooms() {
  return (
    <div>
      <Header/>
      <Nav rooms = "w3-red"/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Rooms
