import { recipes } from "./data.js";

function RecipeIngredients(props) {
  return (
    <ul>
      {props.ingredients.map((ingredient) => {
        return <li>{ingredient}</li>;
      })}
    </ul>
  );
}

export default function RecipeList() {
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <>
            <h2>{recipe.name}</h2>
            <RecipeIngredients ingredients={recipe.ingredients} />
          </>
        );
      })}
    </div>
  );
}
