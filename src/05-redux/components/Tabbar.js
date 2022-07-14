import { NavLink } from "react-router-dom";

export default function Tabbar() {
  let activeStyle = {
    color: "red",
  };

  return (
    <ul>
      <li>
        <NavLink to="/films">
          {({ isActive }) => (
            <span style={isActive ? activeStyle : undefined}>电影</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/cinemas">
          {({ isActive }) => (
            <span style={isActive ? activeStyle : undefined}>影院</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/center">
          {({ isActive }) => (
            <span style={isActive ? activeStyle : undefined}>我的</span>
          )}
        </NavLink>
      </li>
    </ul>
  );
}
