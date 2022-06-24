import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

function CategoryItem({id,name,thumb} : {id: string, name: string, thumb: string}) {
  return (
    <Link to={`/c/${name}`}>
      <div className={styles.CategoryItem} key={id}>
        <div className={styles.CategoryItem__Img}>
          <img src={thumb} alt={name}/>
        </div>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}

export default CategoryItem;