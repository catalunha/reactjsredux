import React from 'react';
import { useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'

import './styles.css'
function Reservas() {
  const reserves = useSelector(state => state.reserve)
  // console.log('Minhas reservas:', reserves)
  return (
    <div>
      <h1 className='title'>Você solicitou {reserves.length} reserva</h1>
      {reserves.map((item) => (
        <div className='reservas' key={item.id}>
          <img
            src={item.image}
            alt={item.title}
          />
          <strong>{item.title}</strong>
          <span>Quantidade: 2</span>
          <button
            type='button'
            onClick={() => { }}
          >
            <MdDelete size={20} color='#191919' />
          </button>
        </div>
      ))}
      <footer>
        <button
          type='button'
        >
          Solicitar reservas
         </button>
      </footer>
    </div>
  );
}

export default Reservas;
