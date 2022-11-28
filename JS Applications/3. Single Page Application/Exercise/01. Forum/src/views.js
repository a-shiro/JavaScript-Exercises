import {displayTopics} from "./dom.js";

async function showHomeView() {
    document.querySelector('.topic-container').innerHTML = '';
    await displayTopics();

    document.querySelector('#homeView').style.display = 'block';
}

function showTopicView() {
    document.querySelector('#topicView').style.display = 'block';
}

const views = {
    'home': showHomeView,
    'details': showTopicView,
}

export function render(page) {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');

    return views[page]();
}


