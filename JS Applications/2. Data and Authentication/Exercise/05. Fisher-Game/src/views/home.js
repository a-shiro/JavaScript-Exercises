import { hideSections } from "../utils.js";
import { loadCatches } from "../data/requests.js";

const section = document.querySelector('#home-view');

export function showHomeView() {
    hideSections();
    loadCatches();
    section.style.display = 'block';
}


