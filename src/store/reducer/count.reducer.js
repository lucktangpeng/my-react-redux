import { handleActions as createReducer } from 'redux-actions'
import { increment } from '../actions/count.action'
const initialState = {
  count: 1
}

function handleIncrement (state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  newState.count = newState.count + action.payload
  return newState
}

export default createReducer(
  {
    [increment]: handleIncrement,
  }, initialState
)


// function reducer (state = initialState, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count +1 }
//     case 'decrement':
//       return { count: state.count -1 }
//     default:
//       return state
//   }
// }

// export default reducer