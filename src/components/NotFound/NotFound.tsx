import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
const NotFound = () => {
  return (
    <div>
      <div id='oopss'>
  <div id='error-text'>
    <span>404</span>
    <p>Ups... Página no encontrada</p>
    <p className='hmpg'>
    <Nav.Link as={Link} to="/" className="back">Volver al inicio</Nav.Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default NotFound
