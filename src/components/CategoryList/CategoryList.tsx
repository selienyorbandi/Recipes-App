import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoryList.module.css";

interface catgListProp {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

function CategoryList({ list } : {list : catgListProp[] }) {
  return (
    <div className={styles.CategoryList}>
      {list.map(item => (
        <CategoryItem
          id={item.idCategory}
          name={item.strCategory}
          thumb={item.strCategoryThumb}
          key={item.idCategory}
        />
      ))}
    </div>
  );
}

export default CategoryList;
