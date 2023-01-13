import { hideSections, swapActiveBtn } from "../utils.js";

const section = document.querySelector('#register-view');
const registerBtn = document.querySelector('#register'); 

export function showRegisterView() {
    hideSections();
    swapActiveBtn(registerBtn);
    section.style.display = 'block';
}