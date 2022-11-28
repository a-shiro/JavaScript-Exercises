import {render} from "./views.js";
import {getTopicById} from "./requests.js";

export function clearFields() {
    document.querySelector('#topicName').value = '';
    document.querySelector('#username').value = '';
    document.querySelector('#postText').value = '';
}

export async function displayTopics() {
    const topicContainer = document.querySelector('.topic-container');

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    const topics = await response.json();

    Object.entries(topics).forEach(entry => {
        const [topicId, topicData] = entry;

        const div = document.createElement('div');
        div.classList.add('topic-name-wrapper');

        div.innerHTML =
            `<div class="topic-name">
                <a id="${topicId}" href="javascript:void(0)" class="normal">
                    <h2>${topicData.topicName}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${topicData.time}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${topicData.username}</span></p>
                        </div>
                    </div>
                </div>
            </div>`

        div.querySelector('a').addEventListener('click', loadDetails)

        topicContainer.append(div);
    })
}

async function loadDetails(event) {
    const topicId = event.target.parentElement.id;

    const topic = await getTopicById(topicId);

    document.querySelector('#topicTitle').textContent = topic.topicName;
    document.querySelector('#profileUsername').textContent = topic.username;
    document.querySelector('#timePosted').textContent = topic.time;
    document.querySelector('#postedContent').textContent = topic.postText;

    render('details');
}