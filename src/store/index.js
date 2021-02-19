
import reducer from './reducer/count.reducer'
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMidddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

const sagaMiddleware = createSagaMidddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store