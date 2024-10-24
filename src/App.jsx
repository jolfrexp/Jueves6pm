import './App.css'
import { Route,Routes } from 'react-router-dom'
import { HotelProvider } from './components/HotelProvider'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import Room from './Pages/Room'
function App() {


  return (
    <>
      <HotelProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Rooms' element={<Rooms/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Room/:id' element={<Room/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </HotelProvider>
    </>
  )
}

export default App
