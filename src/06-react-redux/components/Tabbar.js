import { NavLink } from "react-router-dom";
import styles from "./Tabbar.module.css";

export default function Tabbar() {
  return (
    <div className={styles.tabbar}>
      <ul>
        <li>
          <NavLink to="/films">
            {({ isActive }) => (
              <span className={isActive ? styles.active : undefined}>电影</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/cinemas">
            {({ isActive }) => (
              <span className={isActive ? styles.active : undefined}>影院</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/center">
            {({ isActive }) => (
              <span className={isActive ? styles.active : undefined}>我的</span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
