const reducer = (prevState = { show: true }, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "SHOW":
      newState.show = true;
      return newState;
    case "HIDE":
      newState.show = false;
      return newState;
    default:
      return prevState;
  }
};

export default reducer;
