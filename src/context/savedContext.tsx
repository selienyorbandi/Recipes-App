import React, { useContext, useEffect, useState } from "react";
import Recipe from "../pages/Recipe/Recipe";

interface Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface ISavedContext {
  savedRecipes: Recipe[];
  saveRecipe: (recipe: Recipe) => void;
  isInSaved: (id: string) => boolean;
  removeRecipe: (recipe: Recipe) => void;
  hasChanged: boolean;
}

const savedFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem("savedRecipes") || "[]");
};

const saveToLocalStorage = (content : Recipe[]) => {
  window.localStorage.setItem("savedRecipes", JSON.stringify(content || "[]"));
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const defaultState = {
  savedRecipes: savedFromLocalStorage(),
  saveRecipe: (recipe: Recipe) => void 0,
  isInSaved: (id: string) => false,
  removeRecipe: (recipe: Recipe) => void 0,
  hasChanged: false,
};
/* eslint-enable @typescript-eslint/no-unused-vars */

const SavedContext = React.createContext<ISavedContext>(defaultState);
export const useSavedContext = () => useContext(SavedContext);

export function SavedContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>(savedFromLocalStorage());
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    saveToLocalStorage(savedRecipes);
  }, [hasChanged]);

  const saveRecipe = (recipe: Recipe) => {
    const newSavedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(newSavedRecipes);
    setHasChanged(!hasChanged);
  };

  const isInSaved = (id: string): boolean => {
    for (let i = 0; i < savedRecipes.length; i++) {
      if (savedRecipes[i].idMeal === id) {
        return true;
      }
    }
    return false;
  };

  const removeRecipe = (recipe: Recipe): void => {
    for (let i = 0; i < savedRecipes.length; i++) {
      if (recipe.idMeal === savedRecipes[i].idMeal) {
        savedRecipes.splice(i, 1);
        setHasChanged(!hasChanged);
        break;
      }
    }
  };

  return (
    <SavedContext.Provider
      value={{
        savedRecipes,
        saveRecipe,
        isInSaved,
        removeRecipe,
        hasChanged,
      }}>
      {children}
    </SavedContext.Provider>
  );
}
