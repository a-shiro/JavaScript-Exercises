import {showRecipeDetailsView} from "./views.js";

function createCard(recipe) {
    const card = document.createElement('article');

    card.classList.add('preview');

    card.innerHTML = `<div class="title">
                          <h2>${recipe.name}</h2>
                      </div>
                      <div class="small">
                          <img src="${recipe.img}" alt="">
                      </div>`;

    card.addEventListener('click', toggleCard);

    return card;

    async function toggleCard(event) {
        const card = document.querySelector('#recipeDetailsView article');

        const recipeDetails = await getRecipeById(recipe._id);

        card.innerHTML = `<h2>${recipeDetails.name}</h2>
                          <div class="band">
                              <div class="thumb">
                                  <img src="${recipeDetails.img}" alt="">
                              </div>
                              <div class="ingredients">
                                  <h3>Ingredients:</h3>
                                  <ul></ul>
                              </div>
                          </div>
                          <div class="description">
                              <h3>Preparation:</h3>
                          </div>
                          <div>
                              <button class="controls">\u270E Edit</button>
                              <button class="controls">\u2716 Delete</button>  
                          </div>`;

        const ingredientsList = card.querySelector('ul');
        const preparationSteps = card.querySelector('.description');

        fillDetails(ingredientsList, 'li', recipeDetails.ingredients);
        fillDetails(preparationSteps, 'p', recipeDetails.steps);

        showRecipeDetailsView(event)
    }
}

function fillDetails(list, element, collection) {
    collection.forEach(item => {
        const requestedElement = document.createElement(element);
        requestedElement.innerText = item;

        list.append(requestedElement);
    });
}

async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
    const data = await response.json();

    return Object.values(data);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const data = await response.json();

    return data;
}

export async function displayCards() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createCard);

    main.replaceChildren(...cards);
}
