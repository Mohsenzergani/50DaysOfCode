// https://www.edamam.com/

const appId = "b8357617";
const appKey = "5ac80a3a940c58f142083f2147089c67";
const recipeURL = "https://api.edamam.com/search?q=";
// get elements
const form = document.querySelector("form");
const searchResults = document.querySelector(".search-results");

// from add event listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = document.querySelector(".search-input").value;
  // console.log(searchQuery)
  // get api
  fetchRecipes(searchQuery);
});

// async fetch recipes
async function fetchRecipes(searchQuery) {
  const response = await fetch(
    `${recipeURL}${searchQuery}&app_id=${appId}&app_key=${appKey}&to=30`
  );
  const data = await response.json();
  displayRecipes(data.hits);
}

// display Recipes
function displayRecipes(recipes) {
  
  let recipeElements = "";
  recipes.map((recipeResult) => {
    // console.log(recipeResult)
    recipeElements += `
    <div class="item">
      <img src="${recipeResult.recipe.image}" />
      <div class="content-wrapper">
        <h2 class="recipe-title">${recipeResult.recipe.label}</h2>
        <a href="${
          recipeResult.recipe.url
        }" target="_blank" class="view-recipe">View Recipe</a>
      </div>
      <div class="recipe-desc">
        <p class="item-data">Calories: ${recipeResult.recipe.calories.toFixed(
          2
        )}</p>
        <p class="item-data">Diet Label: ${recipeResult.recipe.dietLabels}</p>
        <p class="item-data">Health Label: ${
          recipeResult.recipe.healthLabels
        }</p>
        <p class="item-data">Source: ${recipeResult.recipe.source}</p>
      </div>
  </div>
    `;
    // console.log(recipeResult)

    searchResults.innerHTML = recipeElements;
  });
}
