import { NavLink } from "react-router-dom";

import logo from "../../../assets/recipes-app-logo-white.png";
import styles from "./SideBar.module.css";

function SideBar(): JSX.Element {
  return (
    <nav className={styles.SideBar}>
      <img src={logo} />
      <hr />
      <ul>
        <NavLink to="/" className={({isActive}) => isActive ? styles.SideBar__Link__Active : undefined}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/s" className={({isActive}) => isActive ? styles.SideBar__Link__Active : undefined}>
          <li>Search</li>
        </NavLink>
        <NavLink to="/categories" className={({isActive}) => isActive ? styles.SideBar__Link__Active : undefined}>
          <li>Categories</li>
        </NavLink>
        <NavLink to="/saved" className={({isActive}) => isActive ? styles.SideBar__Link__Active : undefined}>
          <li>Saved</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default SideBar;
