import { hideSections } from "../utils.js";

const section = document.querySelector('#register-view');

export function showRegisterView() {
    hideSections();
    section.style.display = 'block';
}