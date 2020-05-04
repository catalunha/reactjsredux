export function addReserveResquest(id){
  return {
    type:'ADD_RESERVE_REQUEST',
    id:id
  }
}
export function addReserveSucess(trip){
  return {
    type:'ADD_RESERVE_SUCESS',
    trip
  }
}

export function removeReserve(id){
  return {
    type: 'REMOVE_RESERVE',
    id:id
  }
}

export function updateAmountReserve(id,amount){
  return {
    type: 'UPDATE_RESERVE',
    id:id,
    amount:amount,
  }
}