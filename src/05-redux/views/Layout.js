import { Outlet } from "react-router-dom";
import Tabbar from "../components/Tabbar";
import store from "../redux/store";
import { useEffect, useState } from "react";

export default function Layout() {
  const [show, setShow] = useState(true);
  console.log(show, "show");
  useEffect(() => {
    store.subscribe(() => {
      setShow(store.getState().show);
      console.log("app", store.getState());
    });
  }, []);
  return (
    <div>
      <Outlet></Outlet>
      {show ? <Tabbar></Tabbar> : null}
    </div>
  );
}
