import React from 'react'
import Content from '../components/Content'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
function About() {
  return (
    <div>
      <Header/>
      <Nav about = "w3-red"/>
      <h3>About</h3>
      <h6>Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
      <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p>
      <div class="w3-row-padding w3-large w3-center" >
       <div class="w3-third"><i class="fa fa-map-marker w3-text-red"></i> 423 Some adr, Chicago, US</div>
        <div class="w3-third"><i class="fa fa-phone w3-text-red"></i> Phone: +00 151515</div>
      <div class="w3-third"><i class="fa fa-envelope w3-text-red"></i> Email: mail@mail.com</div>
     </div>
     <div class="w3-panel w3-red w3-leftbar w3-padding-32">
    <h6><i class="fa fa-info w3-deep-orange w3-padding w3-margin-right"></i> On demand, we can offer playstation, babycall, children care, dog equipment, etc.</h6>
  </div>
  <div class="w3-container w3-padding-32 w3-black w3-opacity w3-card w3-hover-opacity-off" >
    <h2>Get the best offers first!</h2>
    <p>Join our newsletter.</p>
    <label>E-mail</label>
    <input class="w3-input w3-border" type="text" placeholder="Your Email address"/>
    <button type="button" class="w3-button w3-red w3-margin-top">Subscribe</button>
  </div>
  
      <Footer/>
    </div>
  )
}

export default About
