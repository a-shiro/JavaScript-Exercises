import {displayTopics} from "./dom.js";

async function showHomeView() {
    await displayTopics();

    document.querySelector('#homeView').style.display = 'block';
    console.log('hello')
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


