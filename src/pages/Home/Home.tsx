import logo from "../../assets/recipes-app-logo.png";
import SearchBar from "../../components/Searchbar/SearchBar";
import styles from "./Home.module.css";

function Home(): JSX.Element {
  return (
    <section className={styles.Home}>
      <div className={styles.Home__content}>
        <img src={logo} />
        <p className={styles.Home__slogan}>Food for every mood</p>
        <SearchBar />
      </div>
      <div className={styles.Attribution}>
        <p>Developed by Selien Yorbandi</p>
        <p>Powered by TheMealDb</p>
      </div>
    </section>
  );
}

export default Home;
