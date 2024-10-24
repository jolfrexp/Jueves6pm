import { createContext,useState } from "react"
let hotelContext = createContext();

function HotelProvider({children}) {
    let [infoHotel, setInfoHotel] = useState("Hola")
  return (
    <hotelContext.Provider value={{infoHotel,setInfoHotel}}>
        {children}
    </hotelContext.Provider>
  )
}

export {hotelContext, HotelProvider}
