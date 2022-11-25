import {showHomeView, showLoginView, showRegisterView, showCreateRecipeView} from "./views.js";
import {onLogin, logout, onRegister, isUserLogged} from "./auth.js";
import {displayCards} from "./catalog.js";
import {onSubmit} from "./create.js";


async function startApp() {
    document.querySelector('#homeBtn').addEventListener('click', showHomeView);
    document.querySelector('#loginBtn').addEventListener('click', showLoginView);
    document.querySelector('#registerBtn').addEventListener('click', showRegisterView);
    document.querySelector('#createRecipeBtn').addEventListener('click', showCreateRecipeView)

    document.querySelector('#loginForm').addEventListener('submit', onLogin);
    document.querySelector('#registerForm').addEventListener('submit', onRegister);
    document.querySelector('#logoutBtn').addEventListener('click', logout);
    document.querySelector('#createRecipeForm').addEventListener('submit', onSubmit);

    isUserLogged();
    await displayCards();
}

startApp();
