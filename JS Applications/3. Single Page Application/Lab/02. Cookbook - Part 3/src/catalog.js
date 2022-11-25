import {showCreateRecipeView, showRecipeDetailsView} from "./views.js";

function createCard(recipe) {
    const card = document.createElement('article');

    card.classList.add('preview');

    card.innerHTML = `<div class="title">
                          <h2>${recipe.name}</h2>
                      </div>
                      <div class="small">
                          <img src="${recipe.img}" alt="">
                      </div>`;

    card.addEventListener('click', showDetails);

    return card;

    async function showDetails(event) {
        const card = document.querySelector('#recipeDetailsView article');

        const recipeDetails = await getRecipeById(recipe._id);

        card.id = recipeDetails._ownerId;
        card.innerHTML = `<h2 id="${recipe._id}">${recipeDetails.name}</h2>
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
                          </div>`;

        const ingredientsList = card.querySelector('ul');
        const preparationSteps = card.querySelector('.description');

        fillDetails(ingredientsList, 'li', recipeDetails.ingredients);
        fillDetails(preparationSteps, 'p', recipeDetails.steps);


        if (sessionStorage.userId === recipeDetails._ownerId) {
            const div = document.createElement('div');

            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            editBtn.addEventListener('click', editRecipe);
            deleteBtn.addEventListener('click', deleteRecipe);

            editBtn.textContent = '\u270E Edit';
            deleteBtn.textContent = '\u2716 Delete';

            div.append(editBtn, deleteBtn);
            card.append(div);
        }

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

async function deleteRecipe(event) {
    const id = event.path[2].firstChild.id;
    const token = sessionStorage.getItem('accessToken')

    await fetch('http://localhost:3030/data/recipes/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/JSON',
            'X-Authorization': token
        },
    })

    await displayCards();
    window.location = 'index.html'
}

async function editRecipe(event) {
    showCreateRecipeView(event)

    const id = event.path[2].firstChild.id;

    document.querySelector('#createRecipeView h2').textContent = 'Edit Recipe';
    const submitBtn = document.querySelector('#createRecipeForm [name="submitBtn"]');

    submitBtn.value = 'Update Recipe';
    submitBtn.id = id;

    const recipe = await getRecipeById(id);

    const [nameField, imageField] = document.querySelectorAll('#createRecipeForm input');
    const [ingredientsField, preparationField] = document.querySelectorAll('#createRecipeForm textarea');

    nameField.value = recipe.name;
    imageField.value = recipe.img;
    ingredientsField.value = recipe.ingredients.join('\n');
    preparationField.value = recipe.steps.join('\n');
}

export async function displayCards() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createCard);

    main.replaceChildren(...cards);
}
