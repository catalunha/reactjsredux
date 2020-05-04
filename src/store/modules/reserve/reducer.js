function reserve(state = [], action) {
  console.log('entrada em reserve/recucer')
  // console.log(action)
  // console.log(state)
  switch (action.type) {
    case 'ADD_RESERVE':
      return [...state, action.trip]
    default:
      return state
  }
}

export default reserve