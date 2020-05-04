import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg'
import './styles.css'

function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
  return (
    <header className='container'>
      <Link to='/'>
        <img className='logo' src={logo} alt='Logo do projeto' />
      </Link>
      <Link to='/reservas' className='reserva'>
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </header>
  )
}
export default Header