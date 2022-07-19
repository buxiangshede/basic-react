// 1.引入 redux
// 2. createStore(reducer)

// import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";

const reducer = (prevState = { show: true }, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "SHOW":
      newState.show = true;
      return newState;
    case "HIDDEN":
      newState.show = false;
      return newState;
    default:
      return prevState;
  }
};

// const reducer = {
//   auth: todoReducer,
// };

// const listenerMiddleware = createListenerMiddleware();

// const store = configureStore({
//   reducer,
//   preloadedState: {
//     auth: {
//       // accessToken,
//       // refreshToken,
//     },
//   },
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().prepend(listenerMiddleware.middleware),
// });

const store = createStore(reducer);

console.log("Starting", store);

export default store;
