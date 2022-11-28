import {render} from "./views.js";
import {createTopic} from "./requests.js";
import {clearFields} from "./dom.js";

async function startApp() {
    document.querySelector('#homeBtn').addEventListener('click', () => render('home'));
    document.querySelector('#cancelBtn').addEventListener('click', clearFields);
    document.querySelector('#createTopicForm').addEventListener('submit', createTopic);

    render('home');
}

startApp();
