import { Link } from "react-router-dom";
import saveIco from "../../assets/save-ico.svg";
import { useSavedContext } from "../../context/savedContext";
import { truncateString } from "../../utils/truncateString";
import styles from "./RecipeCard.module.css";

interface recipeCardProp {
  name: string;
  thumb: string;
  id: string;
}

function RecipeCard({ name, thumb, id }: recipeCardProp): JSX.Element {
  const { saveRecipe, isInSaved, removeRecipe } = useSavedContext();

  const handleClickSave = () => {
    const currObj = {
      strMeal: name,
      strMealThumb: thumb,
      idMeal: id,
    };
    if (isInSaved(id)) {
      removeRecipe(currObj);
    } else {
      saveRecipe(currObj);
    }
  };

  return (
    <div key={id} className={styles.RecipeCard}>
      <div
        className={isInSaved(id) ? styles.RecipeCard__isSaved : styles.RecipeCard__notSaved}
        onClick={handleClickSave}>
        <img src={saveIco} alt="Save this recipe" />
      </div>
      <Link to={`/r/${id}`}>
        <div className={styles.RecipeCard__img}>
          <img src={thumb} alt={name} />
        </div>
        <h2>{truncateString(name, 45)}</h2>
      </Link>
    </div>
  );
}

export default RecipeCard;
