// import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../const/count.const"
import { createAction } from 'redux-actions'
// export const increment = (payload) => ({ type: INCREMENT, payload })
// export const decrement = (payload) => ({ type: DECREMENT, payload })
// export const increment_async = (payload) => ({ type: INCREMENT_ASYNC, payload })


export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const increment_async = createAction('increment_async')
// export const increment_async = (payload) => (dispatch) => {
//   setTimeout( () => {
//     console.log(payload)
//     dispatch(increment())
//   },2000)
// }