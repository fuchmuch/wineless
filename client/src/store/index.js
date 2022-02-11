import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import StoreReducer from './reducers/StoreReducer'
import LocationReducer from './reducers/LocationReducer'
import UserReducer from './reducers/UserReducer'



const store = createStore(
    combineReducers({
        StoreState: StoreReducer, LocationState: LocationReducer, userState: UserReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)))
  
  
  export default store