// 1.引入 redux
// 2. createStore(reducer)

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import TabbarReducer from "./reducer/TabbarReducer";
import CityReducer from "./reducer/CityReducer";
import CinemaListReducer from "./reducer/CinemaListReducer";

const reducer = combineReducers({
  TabbarReducer,
  CityReducer,
  CinemaListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);

console.log("Starting", store);

export default store;
