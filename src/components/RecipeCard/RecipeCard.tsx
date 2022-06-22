import styles from "./RecipeCard.module.css";

interface recipeCardProp {
  name : string,
  thumb : string,
  id : string
}

function RecipeCard({name, thumb, id} : recipeCardProp) : JSX.Element {
  return (
    <div key={id} className={styles.RecipeCard}>
      <div className={styles.RecipeCard__img}>
        <img src={thumb} alt={name} />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default RecipeCard;