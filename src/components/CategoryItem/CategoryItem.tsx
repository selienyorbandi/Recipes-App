import styles from "./CategoryItem.module.css";

function CategoryItem({id,name,thumb} : {id: string, name: string, thumb: string}) {
  return (
    <div className={styles.CategoryItem} key={id}>
      <div className={styles.CategoryItem__Img}>
        <img src={thumb} alt={name}/>
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default CategoryItem;