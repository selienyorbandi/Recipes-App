import { NavLink } from "react-router-dom";

import logo from "../../../assets/recipes-app-logo-white.png";
import styles from "./SideBar.module.css";

function SideBar(): JSX.Element {
  return (
    <nav className={styles.SideBar}>
      <img src={logo} />
      <hr />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/">
          <li>Search</li>
        </NavLink>
        <NavLink to="/categories">
          <li>Categories</li>
        </NavLink>
        <NavLink to="/saved">
          <li>Saved</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default SideBar;
