import { hideSections, swapActiveBtn } from "../utils.js";

const section = document.querySelector('#login-view');
const loginBtn = document.querySelector('#login'); 

export function showLoginView() {
    hideSections();
    swapActiveBtn(loginBtn);
    section.style.display = 'block';
}