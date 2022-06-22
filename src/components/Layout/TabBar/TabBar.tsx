import { NavLink } from "react-router-dom";

import homeIco from "../../../assets/home-ico.svg";
import searchIco from "../../../assets/search-ico.svg";
import categoryIco from "../../../assets/categoryAlt-ico.svg";
import savedIco from "../../../assets/save-ico.svg";

import styles from "./TabBar.module.css";

function TabBar() : JSX.Element {
  return (
    <nav className={styles.TabBar}>
      <ul>
        <NavLink to="/">
          <li>
            <p>Home</p>
            <img src={homeIco}/>
          </li>
        </NavLink>
        <NavLink to="/">
          <li>
            <p>Search</p>
            <img src={searchIco}/>
          </li>
        </NavLink>
        <NavLink to="/categories">
          <li>
            <p>Categories</p>
            <img src={categoryIco}/>
          </li>
        </NavLink>
        <NavLink to="/saved">
          <li>
            <p>Saved</p>
            <img src={savedIco}/>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default TabBar;
