import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions'

import './styles.css'
function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)
  // console.log('Minhas reservas:', reserves)
  function handleRemove(id) {
    dispatch(removeReserve(id))
  }
  function decrementAmout(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1))
  }
  function incrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1))
  }
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
          <div id='amount'>
            <button type='button' onClick={() => decrementAmout(item)}><MdRemoveCircle size={20} color='#191919' /></button>
            <input type='text' readOnly value={item.amount} />
            <button type='button' onClick={() => incrementAmount(item)}><MdAddCircle size={20} color='#191919' /></button>
          </div>
          <button
            type='button'
            onClick={() => handleRemove(item.id)}
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
