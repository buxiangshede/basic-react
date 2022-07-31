import MRouter from "./router/indexRouter";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MRouter></MRouter>
      </Provider>
    </div>
  );
}

export default App;
