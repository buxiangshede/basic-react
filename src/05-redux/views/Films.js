import { NavLink, Outlet } from "react-router-dom";
function Films() {
  return (
    <div>
      Films----
      <ul>
        <li>
          <NavLink to="/films/nowplaying">正在热映</NavLink>
        </li>
        <li>
          <NavLink to="/films/sooncoming">即将上映</NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default Films;
