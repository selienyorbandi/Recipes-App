import RecipeCard from "../RecipeCard/RecipeCard";

import styles from "./RecipesList.module.css";

interface recipeListProp {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

function RecipesList({ recipeList }: { recipeList: recipeListProp[] }): JSX.Element {
  return (
    <div className={styles.RecipesList}>
      {recipeList.map(recipe => (
        <RecipeCard
          name={recipe.strMeal}
          thumb={recipe.strMealThumb}
          key={recipe.idMeal}
          id={recipe.idMeal}
        />
      ))}
    </div>
  );
}

export default RecipesList;
