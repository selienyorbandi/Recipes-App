import logo from "../../assets/recipes-app-logo.png";
import SearchBar from "../../components/Searchbar/SearchBar";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.Home}>
      <img src={logo} />
      <p className={styles.Home__slogan}>Food for every mood</p>
      <SearchBar />
      <div className={styles.Attribution}>
        <p>Developed by Selien Yorbandi</p>
        <p>Powered by TheMealDb</p>
      </div>
    </section>
  );
}

export default Home;
