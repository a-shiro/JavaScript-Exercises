async function refreshMessages() {
    const textArea = document.querySelector('#messages');
    textArea.textContent = '';

    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = Object.values(data);

    const result = messages.reduce((result, message) =>
        result + `${message.author}: ${message.content}\n`, '');

    textArea.textContent = result.trim();
}

async function postMessage() {
    let authorField = document.getElementsByName('author')[0];
    let contentField = document.getElementsByName('content')[0];

    const author = authorField.value;
    const content = contentField.value;

    if (author && content) {
        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author, content})
        });
    }

    authorField.value = '';
    contentField.value = '';
}

function attachEvents() {
    document.querySelector('#submit').addEventListener('click', postMessage);
    document.querySelector('#refresh').addEventListener('click', refreshMessages);
}

attachEvents();