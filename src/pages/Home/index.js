import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import api from '../../services/api'
import { MdFlightTakeoff } from 'react-icons/md'
import './styles.css'
function Home() {
  const dispatch = useDispatch()
  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')
      setTrips(response.data)
      // console.log(response.data)
    }
    loadApi()
  }, [])
function handleAdd(trip) {
  dispatch({
    type:'ADD_RESERVE',
    trip:trip
  })
}

  return (
    <div className='box'>
      {trips.map((trip) => (
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          <span>Status:{trip.status ? 'Disponivel' : 'Indisponivel'}</span>
          <button
            type='button'
            onClick={() => handleAdd(trip)}
          >
            <div><MdFlightTakeoff size={16} color='#FFF' /></div>
            <span>Solicitar reserva</span>
          </button>
        </li>
      ))}
    </div>
  );
}

export default Home;
