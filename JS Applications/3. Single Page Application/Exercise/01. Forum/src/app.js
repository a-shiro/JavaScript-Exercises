import {render} from "./views.js";
import {createComment, createTopic} from "./requests.js";
import {clearFields} from "./dom.js";

async function startApp() {
    document.querySelector('#homeBtn').addEventListener('click', () => {
        document.querySelector('.topic-container').innerHTML = '';
        render('home')
    });
    document.querySelector('#cancelBtn').addEventListener('click', clearFields);
    document.querySelector('#createTopicForm').addEventListener('submit', createTopic);
    document.querySelector('#createCommentForm').addEventListener('submit', createComment);

    render('home');
}

startApp();
