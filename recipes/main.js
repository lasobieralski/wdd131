import recipes from './recipes.mjs';  // Import the recipes from the recipes.mjs file

// Example of how to display the recipes on the console
recipes.forEach(recipe => {
  console.log(`Recipe: ${recipe.name}`);
  console.log(`Ingredients: ${recipe.recipeIngredient}`);
  console.log(`Instructions: ${recipe.recipeInstructions}`);
  console.log(`Ratings:${recipe.rating}`);
  console.log('----------------------------------');
});
