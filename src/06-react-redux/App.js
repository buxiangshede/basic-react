import MRouter from "./router/indexRouter";
import store from "./redux/store";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    store.subscribe(() => {
      console.log("app", store.getState());
    });
  }, []);
  return (
    <div className="App">
      <MRouter></MRouter>
    </div>
  );
}

export default App;
