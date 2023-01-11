import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { showRegisterView } from "./views/register.js";
import { render } from "./utils.js";
import { loginUser } from "./data/users.js";

const [homeBtn, logoutBtn, loginBtn, registerBtn] = document.querySelectorAll('header a');
const loginForm = document.querySelector('#login-view form');

loginBtn.addEventListener('click', showLoginView);
homeBtn.addEventListener('click', showHomeView);
registerBtn.addEventListener('click', showRegisterView);
loginForm.addEventListener('submit', loginUser);


render(document.querySelector('#home-view'));