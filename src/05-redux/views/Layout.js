import { Outlet } from "react-router-dom";
import Tabbar from "../components/Tabbar";

export default function Layout() {
  return (
    <div>
      <Outlet></Outlet>
      <Tabbar></Tabbar>
    </div>
  );
}
