import RecipesList from "../../components/RecipesList/RecipesList";
import { useSavedContext } from "../../context/savedContext";
import styles from "./Saved.module.css";

function Saved(): JSX.Element {
  const { savedRecipes } = useSavedContext();

  return (
    <>
      <div className={styles.Saved}>
        <h1>SAVED</h1>
        {savedRecipes.length ? (
          <RecipesList recipeList={savedRecipes} />
        ) : (
          <>
            <p>Nothing here</p>
          </>
        )}
      </div>
    </>
  );
}

export default Saved;
