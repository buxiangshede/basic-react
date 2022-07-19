import MRouter from "./router/indexRouter";
import store from "./redux/store";
import { useEffect } from "react";
// import { Provider as ReduxProvider } from "react-redux";

function App() {
  useEffect(() => {
    store.subscribe(() => {
      console.log("app", store.getState());
    });
  }, []);
  return (
    <div className="App">
      {/* <ReduxProvider store={store}> */}
      <MRouter></MRouter>
      {/* </ReduxProvider> */}
    </div>
  );
}

export default App;
