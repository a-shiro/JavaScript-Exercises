import {onLogin, logout, onRegister, isUserLogged} from "./auth.js";
import {displayCards} from "./catalog.js";
import {createRecipe} from "./create.js";

function hideViews() {
    const sections = document.querySelectorAll('section')

    sections.forEach(section => section.style.display = 'none');
}

function toggleActiveBtn(currentAnchor) {
    document.querySelector('nav .active').classList.remove('active');

    currentAnchor.classList.add('active');
}

function showHomeView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#homeView').style.display = 'block';
}

function showLoginView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#loginView').style.display = 'block';
}

function showRegisterView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#registerView').style.display = 'block';
}

function showCreateRecipeView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#createRecipeView').style.display = 'block';
}

async function startApp() {
    document.querySelector('#homeBtn').addEventListener('click', showHomeView);
    document.querySelector('#loginBtn').addEventListener('click', showLoginView);
    document.querySelector('#registerBtn').addEventListener('click', showRegisterView);
    document.querySelector('#createRecipeBtn').addEventListener('click', showCreateRecipeView)

    document.querySelector('#loginForm').addEventListener('submit', onLogin);
    document.querySelector('#registerForm').addEventListener('submit', onRegister);
    document.querySelector('#logoutBtn').addEventListener('click', logout);
    document.querySelector('#createRecipeForm').addEventListener('submit', createRecipe);

    isUserLogged();
    await displayCards();
}

startApp();
