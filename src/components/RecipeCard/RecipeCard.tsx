import { Link } from "react-router-dom";
import saveIco from "../../assets/save-ico.svg";
import styles from "./RecipeCard.module.css";

interface recipeCardProp {
  name : string,
  thumb : string,
  id : string,
  fav?: false
}

function RecipeCard({name, thumb, id} : recipeCardProp) : JSX.Element {
  return (
    <Link to={`/r/${id}`}>
      <div key={id} className={styles.RecipeCard}>
        <div className={styles.RecipeCard__notSaved}>
          <img src={saveIco} alt="Save this recipe" />
        </div>
        <div className={styles.RecipeCard__img}>
          <img src={thumb} alt={name} />
        </div>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}

export default RecipeCard;