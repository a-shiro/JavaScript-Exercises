import {clearFields} from "./dom.js";
import {render} from "./views.js";

export async function createTopic(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {topicName, username, postText} = Object.fromEntries(formData.entries());

    if (!topicName || !username || !postText) {
        return window.alert('All fields are required!');
    }

    await sendRequest({
        topicName,
        username,
        postText,
        time: new Date()
    });

    clearFields();
    render('home');
}

async function sendRequest(body) {
    await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
}
