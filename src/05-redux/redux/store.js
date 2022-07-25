// 1.引入 redux
// 2. createStore(reducer)

import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import TabbarReducer from "./reducer/TabbarReducer";
import CityReducer from "./reducer/CityReducer";
import CinemaListReducer from "./reducer/CinemaListReducer";

const reducer = combineReducers({
  TabbarReducer,
  CityReducer,
  CinemaListReducer,
});

const store = createStore(reducer, applyMiddleware(reduxThunk));

console.log("Starting", store);

export default store;
