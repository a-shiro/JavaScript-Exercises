function clearFields() {
    document.querySelector('#topicName').value = '';
    document.querySelector('#username').value = '';
    document.querySelector('#postText').value = '';
}

async function createTopic(event) {
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
    await displayTopics();
}

async function sendRequest(body) {
    await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
}

async function displayTopics() {
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

function loadDetails(event) {


    // event.target.parentElement
    window.location = 'theme-content.html';
}

async function startApp() {
    document.querySelector('#cancelBtn').addEventListener('click', clearFields);
    document.querySelector('#createTopicForm').addEventListener('submit', createTopic);

    await displayTopics();
}

startApp();
