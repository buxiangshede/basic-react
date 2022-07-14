import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Films1 from "../views/films/Films1";
import Films2 from "../views/films/Films2";

function MRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              path="/"
              element={<Navigate replace={true} to="./films" />}
            />
            <Route path="/films" element={<Films />}>
              <Route
                path="/films"
                element={<Navigate replace={true} to="./nowplaying" />}
              />
              <Route path="/films/nowplaying" element={<Films1 />}></Route>
              <Route path="/films/sooncoming" element={<Films2 />}></Route>
            </Route>
            <Route path="/cinemas" element={<Cinemas />}></Route>
            <Route path="/center" element={<Center />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MRouter;
