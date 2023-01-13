import { hideSections, swapActiveBtn } from "../utils.js";
import { loadCatches } from "../data/requests.js";

const section = document.querySelector('#home-view');
const addBtn = document.querySelector('.add');
const homeBtn = document.querySelector('#home'); 

export function showHomeView() {
    hideSections();
    swapActiveBtn(homeBtn);
    loadCatches();
    
    sessionStorage.length > 1
        ? addBtn.disabled = false
        : addBtn.disabled = true;

    section.style.display = 'block';
}


