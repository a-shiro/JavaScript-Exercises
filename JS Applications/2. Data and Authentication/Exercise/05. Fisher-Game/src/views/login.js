import { hideSections } from "../utils.js";

const section = document.querySelector('#login-view');

export function showLoginView() {
    hideSections();
    section.style.display = 'block';
}