import recipes from './recipes.mjs'; // Import the recipes from recipes.mjs

// Function to generate a random number between 0 and num-1
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from an array
function getRandomListEntry(list) {
    if (!Array.isArray(list) || list.length === 0) {
        throw new Error("The list is either not defined or empty.");
    }
    const randomNum = random(list.length); // Generate a random index
    return list[randomNum]; // Return the random entry
}

// Function to create star ratings
function createStars(rating) {
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    return fullStars + emptyStars;
}

// Function to generate the recipe HTML template
function recipeTemplate(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="Image of ${recipe.name}" />
            <figcaption>
                <ul class="recipe__tags">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe__ratings">
                    ${ratingTemplate(recipe.rating)}
                </p>
                <p class="recipe__description">
                    ${recipe.description}
                </p>
			</figcaption>
        </figure>
    `;
}

// Function to generate tags HTML
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to generate the ratings HTML
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= Math.floor(rating)
            ? `<span aria-hidden="true" class="icon-star">⭐</span>`
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Function to render recipes to the DOM
function renderRecipes(recipeList) {
    const outputElement = document.querySelector("#result");
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipeHTML;
}

// Filter recipes based on a query string
function filterRecipes(query) {
    return recipes
        .filter(recipe => {
            return (
                recipe.name.toLowerCase().includes(query) || // Check name
                recipe.description.toLowerCase().includes(query) || // Check description
                recipe.tags.find(tag => tag.toLowerCase().includes(query)) || // Check tags
                recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query)) // Check ingredients
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
}

// Search handler for filtering recipes
function searchHandler(event) {
    event.preventDefault(); // Prevent the form from refreshing

    // Get the search input and convert to lowercase
    const searchInput = document.querySelector("#search-bar").value.toLowerCase();

    // Filter recipes based on the search query
    const filteredRecipes = filterRecipes(searchInput);

    // Render the filtered recipes
    if (filteredRecipes.length === 0) {
        document.querySelector("#result").innerHTML = `<p>No recipes found for "${searchInput}".</p>`;
    } else {
        renderRecipes(filteredRecipes);
    }
	document.querySelector("#search-bar").value = "";
}

// Initialize the app and set up event listeners
function init() {
    // Render a random recipe on page load
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);

    // Set up the search functionality
    document.querySelector("form").addEventListener("submit", searchHandler);

    // Set up the "Generate Random Recipe" button
    const generateButton = document.querySelector("#generateButton");
    generateButton.addEventListener("click", () => {
        const randomRecipe = getRandomListEntry(recipes);
        renderRecipes([randomRecipe]);
    });
}

// Call init to start the app
document.addEventListener("DOMContentLoaded", init);

