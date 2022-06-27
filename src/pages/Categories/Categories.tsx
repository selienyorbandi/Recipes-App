import { useEffect, useState } from "react";
import { categoryList } from "../../api/endpoints";
import CategoryList from "../../components/CategoryList/CategoryList";
import GoBack from "../../components/GoBack/GoBack";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Categories.module.css";

function Categories(): JSX.Element {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(categoryList)
      .then(response => response.json())
      .then(result => setCategories(result.categories));
  }, []);

  return (
    <div className={styles.Categories}>
      <GoBack />
      <h1>CATEGORIES</h1>
      {categories.length ? <CategoryList list={categories} /> : <Spinner />}
    </div>
  );
}

export default Categories;
