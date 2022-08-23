import MRouter from "./router/indexRouter";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MRouter></MRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
