import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bikeReducer } from "./reducers/bikeReducers";

//reducer
const reducer=combineReducers({
  bikesReducer:bikeReducer

})

//middleware
const middleware=[thunk]



// create store
const store=createStore(reducer,applyMiddleware(...middleware))

export default store