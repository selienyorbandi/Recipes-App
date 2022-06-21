
import searchIco from "../../assets/search-ico.svg";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.Searchbar}>
      <input type="text" placeholder="Search the recipe desired..." />
      <button className={styles.Searchbar__Btn}>
        <img src={searchIco} className={styles.Searchbar__Ico} />
      </button>
    </div>
  );
}

export default SearchBar;
