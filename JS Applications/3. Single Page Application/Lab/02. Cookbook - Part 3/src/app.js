function fillDetails(list, element, collection) {
    collection.forEach(item => {
        const requestedElement = document.createElement(element);
        requestedElement.innerText = item;

        list.append(requestedElement);
    });
}

function createCard(recipe) {
    const card = document.createElement('article');

    card.classList.add('preview');
    card.style.display = 'block';

    card.innerHTML = `<div class="title">
                          <h2>${recipe.name}</h2>
                      </div>
                      <div class="small">
                          <img src="${recipe.img}" alt="">
                      </div>`;

    card.addEventListener('click', toggleCard);

    return card;

    async function toggleCard() {
        const recipeDetails = await getRecipeById(recipe._id);

        card.classList.remove('preview');

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
                          </div>`;

        const ingredientsList = card.querySelector('ul');
        const preparationSteps = card.querySelector('.description');

        fillDetails(ingredientsList, 'li', recipeDetails.ingredients);
        fillDetails(preparationSteps, 'p', recipeDetails.steps);
    }
}

function displayCards(cards) {
    const main = document.querySelector('main');

    main.replaceChildren(...cards);
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

function isUserLogged() {
    if (sessionStorage.length === 0) {
        return document.querySelector('#guest').style.display = 'inline-block';
    }

    return document.querySelector('#user').style.display = 'inline-block';
}


/////////////////////////

function hideViews() {
    const sections = document.querySelectorAll('section')

    sections.forEach(section => section.style.display = 'none');
}

function toggleActive(currentAnchor) {
    document.querySelector('nav .active').classList.remove('active');

    currentAnchor.classList.add('active');
}

function showHomeView(event) {
    event.preventDefault();

    hideViews();
    toggleActive(event.target);

    document.querySelector('#homeView').style.display = 'block';
}

function showLoginView(event) {
    event.preventDefault();

    hideViews();
    toggleActive(event.target);

    document.querySelector('#loginView').style.display = 'block';
}

function showRegisterView(event) {
    event.preventDefault();

    hideViews();
    toggleActive(event.target);

    document.querySelector('#registerView').style.display = 'block';
}

////////////////////////

import {onLogin, logout, onRegister} from "./auth.js";

async function startApp() {
    document.querySelector('#homeBtn').addEventListener('click', showHomeView);
    document.querySelector('#loginBtn').addEventListener('click', showLoginView);
    document.querySelector('#registerBtn').addEventListener('click', showRegisterView);

    document.querySelector('#loginForm').addEventListener('submit', onLogin);
    document.querySelector('#registerForm').addEventListener('submit', onRegister);
    document.querySelector('#logoutBtn').addEventListener('click', logout);

    const recipes = await getRecipes();
    const cards = recipes.map(createCard);

    isUserLogged();
    displayCards(cards);
}

startApp();
