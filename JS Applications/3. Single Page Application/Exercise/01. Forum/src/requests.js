import {clearFields} from "./dom.js";
import {render} from "./views.js";

export async function getTopicById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    const data = await response.json();

    return data;
}

export async function createTopic(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {topicName, username, postText} = Object.fromEntries(formData.entries());

    if (!topicName || !username || !postText) {
        return window.alert('All fields are required!');
    }

    await sendRequest('http://localhost:3030/jsonstore/collections/myboard/posts', {
        topicName,
        username,
        postText,
        time: new Date()
    });

    clearFields([
        document.querySelector('#topicName'),
        document.querySelector('#profileName'),
        document.querySelector('#postText'),
    ]);
    render('home');
}

export async function getComments() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    const data = await response.json();

    return Object.values(data);
}

export async function createComment(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {comment, username} = Object.fromEntries(formData.entries());

    if (!comment || !username) {
        return window.alert('All fields are required!');
    }

    await sendRequest('http://localhost:3030/jsonstore/collections/myboard/comments', {
        comment,
        username,
        time: new Date(),
        postId: document.querySelector('.comment').id
    })

    clearFields([
        document.querySelector('#comment'),
        document.querySelector('#username')
    ])

    // possibly add render details
}

async function sendRequest(url, body) {
    await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
}