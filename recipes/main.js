// import recipes, {  getRandomRecipe } from './recipes.mjs';  // Import the recipes from the recipes.mjs file

//  document.addEventListener("DOMContentLoaded", () => {
//    const button = document.querySelector("#generateButton");
//    const result = document.querySelector("#result");

//   button.addEventListener("click", () => {
    
//     const randomIndex = getRandomRecipe();
//     result.textContent = `Recipe: ${recipes[randomIndex].name}
//   Ingredients: ${recipes[randomIndex].recipeIngredient}
//   Instructions: ${recipes[randomIndex].recipeInstructions}
//   Ratings:${recipes[randomIndex].rating}`;
  
//   })
// })
// // Example of how to display the recipes on the console
// recipes.forEach(recipe => {
//   console.log(`Recipe: ${recipe.name}`);
//   console.log(`Ingredients: ${recipe.recipeIngredient}`);
//   console.log(`Instructions: ${recipe.recipeInstructions}`);
//   console.log(`Ratings:${recipe.rating}`);
//   console.log('----------------------------------');
// });

import recipes, { getRandomRecipe } from './recipes.mjs'; 

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#generateButton");
    const resultContainer = document.querySelector("#result");

    button.addEventListener("click", () => {
        const randomRecipe = getRandomRecipe(); // Fetch a random recipe

        // Clear previous content
        resultContainer.innerHTML = '';

        // Dynamically create the recipe container
        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe-container');

        // Recipe Image
        const recipeImage = document.createElement('img');
        recipeImage.src = `${randomRecipe.image}`; // Assume each recipe has an `image` property
        recipeImage.alt = randomRecipe.name;

        // Content Wrapper
        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content');

        // Recipe Tags
        const tagContainer = document.createElement('div');
        tagContainer.classList.add('tag-container');
        //tagContainer.textContent = randomRecipe.tags.join(', '); // Assume tags are an array

        // Recipe Title
        const title = document.createElement('h2');
        title.textContent = randomRecipe.name;

        // Recipe Rating
        const rating = document.createElement('span');
        rating.classList.add('rating');
        rating.setAttribute('role', 'img');
        rating.setAttribute('aria-label', `Rating: ${randomRecipe.rating} out of 5 stars`);
        rating.innerHTML = '⭐'.repeat(randomRecipe.rating) + '☆'.repeat(5 - randomRecipe.rating);

        // Recipe Description
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = randomRecipe.description;

        // Append all elements to their respective containers
        contentWrapper.appendChild(tagContainer);
        contentWrapper.appendChild(title);
        contentWrapper.appendChild(rating);
        contentWrapper.appendChild(description);
        recipeContainer.appendChild(recipeImage);
        recipeContainer.appendChild(contentWrapper);
        resultContainer.appendChild(recipeContainer);
    });
});


