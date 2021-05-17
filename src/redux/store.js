import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
  compose

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers)
)

export default store
