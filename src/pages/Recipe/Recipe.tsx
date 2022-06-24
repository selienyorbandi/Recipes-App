import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { recipeById } from "../../api/endpoints";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Recipe.module.css";

interface recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

function ingredientsToArray(recipe: recipe) {
  const ingArr = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}` as keyof typeof recipe] !== "" || null) {
      const ingredientAndMeasure =
        recipe[`strIngredient${i}` as keyof typeof recipe] +
        ": " +
        recipe[`strMeasure${i}` as keyof typeof recipe];
      ingArr.push(ingredientAndMeasure);
    } else {
      break;
    }
  }
  return ingArr;
}

function Recipe(): JSX.Element {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({} as recipe);

  useEffect(() => {
    fetch(`${recipeById}${id}`)
      .then(res => res.json())
      .then(result => setRecipe(result.meals[0]));
  }, []);

  return (
    <>
      <div className={styles.Recipe}>
        {JSON.stringify(recipe) != "{}" ? (
          <>
            <div className={styles.Recipe__Main}>
              <div className={styles.Recipe__img}>
                <img src={recipe.strMealThumb} />
              </div>
            </div>
            <div className={styles.Recipe__content}>
              <h1 className={styles.Recipe__Title}>{recipe.strMeal}</h1>
              <div className={styles.Recipe__badges}>
                <Link to={`/c/${recipe.strCategory}`}>
                  <p>{recipe.strCategory}</p>
                </Link>
                <Link to={`/a/${recipe.strArea}`}>
                  <p>{recipe.strArea}</p>
                </Link>
              </div>
              <h2>Instructions</h2>
              <p className={styles.Recipe__Instructions}>
                {recipe.strInstructions}
              </p>
              <h2>Ingredients</h2>
              <ul className={styles.Recipe__Ingredients}>
                {ingredientsToArray(recipe).map((ing, ind) => (
                  <li key={ind}>{ing}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default Recipe;
