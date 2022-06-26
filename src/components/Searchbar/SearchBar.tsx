import { useNavigate } from "react-router-dom";
import searchIco from "../../assets/search-ico.svg";
import styles from "./SearchBar.module.css";

function SearchBar(): JSX.Element {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const searchKeywords = (document.getElementById("searchInput") as HTMLInputElement).value;
    navigate(`/s/${searchKeywords || "not-found"}`);
  };

  return (
    <form className={styles.Searchbar} onSubmit={handleSubmit}>
      <input type="text" placeholder="Search the recipe desired..." id="searchInput" />
      <button className={styles.Searchbar__Btn}>
        <img src={searchIco} className={styles.Searchbar__Ico} />
      </button>
    </form>
  );
}

export default SearchBar;
