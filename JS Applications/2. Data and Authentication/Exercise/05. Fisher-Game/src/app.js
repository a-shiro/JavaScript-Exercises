import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { showRegisterView } from "./views/register.js";
import { render } from "./utils.js";
import { loginUser, registerUser } from "./data/users.js";
import { logoutUser } from "./data/users.js";

const [homeBtn, logoutBtn, loginBtn, registerBtn] = document.querySelectorAll('header a');
const loginForm = document.querySelector('#login-view form');
const registerForm = document.querySelector('#register-view form');

loginBtn.addEventListener('click', showLoginView);
homeBtn.addEventListener('click', showHomeView);
registerBtn.addEventListener('click', showRegisterView);
logoutBtn.addEventListener('click', logoutUser);
loginForm.addEventListener('submit', loginUser);
registerForm.addEventListener('submit', registerUser);


render(document.querySelector('#home-view'));