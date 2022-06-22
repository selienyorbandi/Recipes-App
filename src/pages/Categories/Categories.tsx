import { useEffect, useState } from "react";
import { categoryList } from "../../api/endpoints";
import CategoryList from "../../components/CategoryList/CategoryList";

import styles from "./Categories.module.css";

function Categories() : JSX.Element {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch(categoryList)
      .then(response => response.json())
      .then(result => setCategories(result.categories));
  }, []);
  
  return (
    <div className={styles.Categories}>
      <h1>Categories</h1>
      <CategoryList list={categories}/>
    </div>
  );
}

export default Categories;