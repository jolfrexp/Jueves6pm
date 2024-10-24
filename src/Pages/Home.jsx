
import Nav from '../components/Nav'
import { useContext,useEffect,useState } from 'react'
import {rooms} from '../../datos.js'
import { hotelContext } from '../components/HotelProvider.jsx'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Article from '../components/Article.jsx'
import hotel1 from '../assets/img/hotel1.jpeg'
import hotel2 from '../assets/img/hotel2.jpg'
import hotel3 from '../assets/img/hotel3.jpg'
let {rooms1} = rooms
function Home() {
  const [dataVisible,setDataVisible] = useState(false)
  const [searchTerm,setSearchTerm] = useState("")
  const [searchTerm2, setSearchTerm2] = useState("")
  const [products,setProducts] = useState("")
  useEffect(() =>{
    
  },[])
  const filteredProducts = rooms1.filter(habitacion => habitacion.freeRoom.toLocaleLowerCase().includes(products.toLocaleLowerCase()))
  let {setInfoHotel} = useContext(hotelContext);
  let cargar = () =>{
    if(searchTerm !== ""&&searchTerm2!==""){
      setProducts("")
      setDataVisible(true)
      setProducts(searchTerm)
      setSearchTerm("")
      setSearchTerm2("")
    }
    else{
      setDataVisible(false)
      alert("ingrese todos los datos")
    }
  }
  useEffect(()=>{
      setInfoHotel(filteredProducts)
  },[filteredProducts])
  return (
    <div>
      <Header/>
      <Nav home = "w3-red"/>
      <h3>Welcome to Hotel Name</h3>
      <p>Nestled in the heart of Medellin, Hotel Name offers a perfect blend of comfort and luxury. Our modern accommodations feature stunning views, top-notch amenities, and personalized service to ensure a memorable stay. Enjoy our on-site dining options, relax at our spa, or explore nearby attractions. Whether youre here for business or leisure, Hotel Name is your ideal home away from home.</p>
      <div className="imagenes">
        <div className="cont-img animate__animated animate__fadeInLeft"><img src={hotel1} alt="" /></div>
        <div className="cont-img animate__animated animate__fadeInDown"><img src={hotel2} alt="" /></div>
        <div className="cont-img animate__animated animate__fadeInRight"><img src={hotel3} alt="" /></div>


      </div>
      <div class="w3-row-padding">
    <div class="w3-col m3">
      <label><i class="fa fa-calendar-o"></i> Check In</label>
      <input class="w3-input w3-border checkin" type="date" value={searchTerm} placeholder="DD MM YYYY" onChange={(e)=>{setSearchTerm(e.target.value) }} required/>
    </div>
    <div class="w3-col m3">
      <label><i class="fa fa-calendar-o"></i> Check Out</label>
      <input class="w3-input w3-border checkout" type="date" value={searchTerm2} placeholder="DD MM YYYY" onChange={(e)=>{setSearchTerm2(e.target.value)}} required/>
    </div>
    <div class="w3-col m2">
      <label><i class="fa fa-male"></i> Adults</label>
      <input class="w3-input w3-border Adults" type="number" value="2" placeholder="0" required/>
    </div>
    <div class="w3-col m2">
      <label><i class="fa fa-child"></i> Kids</label>
      <input class="w3-input w3-border Kids" type="number" value ="0" placeholder="0"/>
    </div>
    <div class="w3-col m2">
      <label><i class="fa fa-search"></i> Search</label>
      <button type='submit' class="w3-button w3-block w3-black search"  onClick={cargar} disabled = {!searchTerm.trim()}>Search</button>
    </div>
  </div>
        <main className="flexin">
      {dataVisible && filteredProducts.length > 0 && filteredProducts.map((habitacion,i)=><Article key={i} id={i} habitacion = {habitacion}/>)}
      
      </main>
        <Footer/>  
      </div>
    
  )
}

export default Home
