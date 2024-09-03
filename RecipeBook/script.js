document.getElementById('recipeForm').addEventListener('submit', addRecipe);

function addRecipe(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const steps = document.getElementById('steps').value;
    const image = document.getElementById('image').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const recipe = {
            name: name,
            ingredients: ingredients,
            steps: steps,
            image: e.target.result
        };

        saveRecipe(recipe);
        displayRecipes();
        document.getElementById('recipeForm').reset();
    };

    if (image) {
        reader.readAsDataURL(image);
    }
}

function saveRecipe(recipe) {
    let recipes = localStorage.getItem('recipes');
    recipes = recipes ? JSON.parse(recipes) : [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function displayRecipes() {
    const recipeGrid = document.getElementById('recipeGrid');
    recipeGrid.innerHTML = '';

    let recipes = localStorage.getItem('recipes');
    recipes = recipes ? JSON.parse(recipes) : [];

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.ingredients}</p>
            <p>${recipe.steps}</p>
        `;

        recipeGrid.appendChild(recipeCard);
    });
}

window.onload = displayRecipes;
