
// import Article from './Article'
import { useContext,useEffect,useState } from 'react'
import {rooms} from '../../datos.js'
import { hotelContext } from './HotelProvider.jsx'
import Article from './Article.jsx'
let {rooms1} = rooms

function Content() {
    let {setInfoHotel} = useContext(hotelContext)
    useEffect(()=>{
        setInfoHotel(rooms1)
    },[])
    let [dataVisible, setDataVisible] = useState(6)
    let loadRooms = () =>{
        setDataVisible((prev)=>prev + 3)
    }
    console.log(rooms1)
  return (
    <>      
        <div className="flexin">
            {rooms1.slice(0,dataVisible).map((habitacion,i)=> <Article key={i} id={i} habitacion = {habitacion}/>)}
            {dataVisible < rooms1.length && <button onClick={loadRooms}>Cargar mas</button>}
        </div>
    </>
  )
}

export default Content
