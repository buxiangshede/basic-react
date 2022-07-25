// 1.引入 redux
// 2. createStore(reducer)

// import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

const CinemaListReducer = (prevState = { list: [] }, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "GET_CINEMA":
      newState.list = action.payload;
      return newState;
    default:
      return prevState;
  }
};

export default CinemaListReducer;
