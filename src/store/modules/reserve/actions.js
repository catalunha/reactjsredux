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

export function updateAmountReserveRequest(id,amount){
  return {
    type: 'UPDATE_RESERVE_REQUEST',
    id:id,
    amount:amount,
  }
}
export function updateAmountReserveSucess(id,amount){
  return {
    type: 'UPDATE_RESERVE_SUCESS',
    id:id,
    amount:amount,
  }
}