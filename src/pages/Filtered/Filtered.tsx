import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterByCategory, filterByArea } from "../../api/endpoints";
import GoBack from "../../components/GoBack/GoBack";

import RecipesList from "../../components/RecipesList/RecipesList";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./Filtered.module.css";

function Filtered(): JSX.Element {
  const { params } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let apiUrl;
    window.location.pathname[1] === "c"
      ? (apiUrl = `${filterByCategory}${params}`)
      : (apiUrl = `${filterByArea}${params}`);

    fetch(apiUrl)
      .then(res => res.json())
      .then(result => setRecipes(result.meals));
  }, []);

  return recipes.length ? (
    <div className={styles.Filtered}>
      <GoBack />
      <h1>{params?.toUpperCase()}</h1>
      <RecipesList recipeList={recipes} />
    </div>
  ) : (
    <Spinner />
  );
}

export default Filtered;
