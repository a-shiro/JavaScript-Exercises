import { render } from "../utils.js";

const section = document.querySelector('#login-view');

export function showLoginView() {
    render(section);
}