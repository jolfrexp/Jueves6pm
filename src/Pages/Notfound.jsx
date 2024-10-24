import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div className='col-sm-8'>
      <h1 className="text-center mt-5">Lo sentimos la pagina no existe</h1>
      <div className="text-center my-3">
        <Link to="/" className='w3-button w3-hover-red'>Regresar al inicio</Link>
      </div>
    </div>
  )
}

export default Notfound
