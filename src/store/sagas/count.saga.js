import { takeEvery, put, delay} from 'redux-saga/effects'
import { increment, increment_async } from '../actions/count.action'
// import { INCREMENT_ASYNC } from '../const/count.const'

function* increment_async_fn (action) {
  yield delay(2000)
  yield put(increment(action.payload))
}

export default function* counterSaga () {
  yield takeEvery(increment_async, increment_async_fn)
}