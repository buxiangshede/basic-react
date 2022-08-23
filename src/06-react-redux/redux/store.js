// 1.引入 redux
// 2. createStore(reducer)

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import TabbarReducer from "./reducer/TabbarReducer";
import CityReducer from "./reducer/CityReducer";
import CinemaListReducer from "./reducer/CinemaListReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import { configureStore } from "@reduxjs/toolkit";
// import tabbarReducer from "./features/tabbarReducer/tabbarSlice";

// export default configureStore({
//   reducer: {
//     tabbar: tabbarReducer,
//   },
// });

const persistConfig = {
  key: "shasha",
  storage,
  whitelist: ["CityReducer"],
};

const reducer = combineReducers({
  TabbarReducer,
  CinemaListReducer,
  CityReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
// let store = createStore(persistedReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);
let persistor = persistStore(store);

export { store, persistor };
