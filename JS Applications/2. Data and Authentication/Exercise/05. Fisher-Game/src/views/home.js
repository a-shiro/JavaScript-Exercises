import { hideSections } from "../utils.js";
import { loadCatches } from "../data/requests.js";

const section = document.querySelector('#home-view');
const addBtn = document.querySelector('.add');

export function showHomeView() {
    hideSections();
    loadCatches();

    sessionStorage.length > 1
        ? addBtn.disabled = false
        : addBtn.disabled = true;

    section.style.display = 'block';
}


