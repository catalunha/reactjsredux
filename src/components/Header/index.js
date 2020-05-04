import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/react.svg'
import './styles.css'

function Header() {
  return (
    <header className='container'>
      <Link to='/'>
      <img className='logo' src={logo} alt='Logo do projeto'/>
      </Link>
      <Link to='/reservas' className='reserva'>
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </header>
  )
}
export default Header