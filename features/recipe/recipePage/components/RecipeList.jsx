import React from "react";
import { RecipeCard } from "@/app/./RecipeCard";

export default function RecipeList({ recipeList }) {
  return (
    <div className="recipe-grid">
      {recipeList.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
