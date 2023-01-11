import { showHomeView } from "./home.js";
import { showLoginView } from "./login.js";
import { showRegisterView } from "./register.js";
import { displayView } from "./utils.js";

const [homeBtn, logoutBtn, loginBtn, registerBtn] = document.querySelectorAll('header a');

loginBtn.addEventListener('click', showLoginView);
homeBtn.addEventListener('click', showHomeView);
registerBtn.addEventListener('click', showRegisterView);


displayView(document.querySelector('#home-view'));