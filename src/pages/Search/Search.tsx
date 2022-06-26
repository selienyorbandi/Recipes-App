import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesList from "../../components/RecipesList/RecipesList";
import SearchBar from "../../components/Searchbar/SearchBar";

import { searchByName } from "../../api/endpoints";

import styles from "./Search.module.css";
import Spinner from "../../components/Spinner/Spinner";

function Search(): JSX.Element {
  const searchParams = useParams<string>().searchParams;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`${searchByName}${searchParams}`)
      .then(response => response.json())
      .then(result => setRecipes(result.meals));
  }, []);

  return (
    <section className={styles.Search}>
      <SearchBar />
      {recipes != null ? (
        recipes.length ? (
          <>
            <h1>{searchParams?.toUpperCase()}</h1>
            <RecipesList recipeList={recipes || []} />
          </>
        ) : (
          <Spinner />
        )
      ) : (
        <h1>Not found</h1>
      )}
    </section>
  );
}

export default Search;
