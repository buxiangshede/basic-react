import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Layout from "../views/Layout";
import Films1 from "../views/films/Films1";
import Films2 from "../views/films/Films2";
import Details from "../views/Details";
import Login from "../views/Login";
import City from "../views/City";

//BrowserRouter 没有#路径 真正朝后端发请求要页面，后端没有对应的路径，就好404，要建议后端指向index.html

function MRouter() {
  const user = () => {
    return localStorage.getItem("token") || false;
  };
  console.log("user", user());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
            <Route
              path="/center"
              element={
                user() ? <Center /> : <Navigate to="/login" replace={true} />
              }
            ></Route>
            <Route path="/city" element={<City />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MRouter;
