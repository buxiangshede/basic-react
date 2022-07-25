// 1.引入 redux
// 2. createStore(reducer)

// import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

const TabbarReducer = (prevState = { cityName: "北京" }, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "change-city":
      newState.cityName = action.payload;
      return newState;
    default:
      return prevState;
  }
};

export default TabbarReducer;
