export function addReserve(trip){
  return {
    type:'ADD_RESERVE',
    trip:trip
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