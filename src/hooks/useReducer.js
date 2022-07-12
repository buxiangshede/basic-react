import React, { useContext, useReducer } from "react";

const GlobalContext = React.createContext();
const reducer = (prevState, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "SET_ADD":
      newState.count1 = action.value;
      return newState;
    case "SET_DES":
      newState.count2 = action.value;
      return newState;
    default:
      return prevState;
  }
};
const intialState = {
  count1: 0,
  count2: 1,
};
function ReducerCom() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Child1></Child1>
      <Child2></Child2>
      <Child3></Child3>
    </GlobalContext.Provider>
  );
}
function Child1() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "SET_DES",
            value: "change-3",
          });
        }}
      >
        change3
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "SET_ADD",
            value: "change-2",
          });
        }}
      >
        change2
      </button>
    </>
  );
}
function Child2() {
  const { state } = useContext(GlobalContext);
  return <div> child-2 {state.count1}</div>;
}

function Child3() {
  const { state } = useContext(GlobalContext);
  return <div>child-3 {state.count2}</div>;
}

export default ReducerCom;
