window.addEventListener("load", solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let storyTitle = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let story = document.getElementById('story');

    let publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', publishStory);

    function publishStory() {
        if (firstName.value === '' || lastName.value === '' || age.value === '' || storyTitle.value === '' || story.value === '') {
            return;
        }

        let previewSection = document.getElementById('preview-list');
        let liElement = document.createElement('li');
        liElement.classList.add('story-info');

        liElement.innerHTML = `<article>
                                <h4>Name: ${firstName.value} ${lastName.value}</h4>
                                <p>Age: ${age.value}</p>
                                <p>Title: ${storyTitle.value}</p>
                                <p>Genre: ${genre.value}</p>
                                <p>${story.value}</p>
                               </article>
                               <button class="save-btn">Save Story</button>
                               <button class="edit-btn">Edit Story</button>
                               <button class="delete-btn">Delete Story</button>`

        let saveStoryBtn = liElement.children[1]
        let editStoryBtn = liElement.children[2]
        let deleteStoryBtn = liElement.children[3]

        saveStoryBtn.addEventListener('click', saveStory);
        editStoryBtn.addEventListener('click', editStory);
        deleteStoryBtn.addEventListener('click', deleteStory);

        saveStoryBtn.disabled = false;
        editStoryBtn.disabled = false;
        deleteStoryBtn.disabled = false;

        previewSection.appendChild(liElement);
        publishBtn.disabled = true;

        firstName.value = '';
        lastName.value = '';
        age.value = '';
        storyTitle.value = '';
        story.value = '';
    }

    function saveStory() {
        let mainDiv = document.getElementById('main');
        mainDiv.innerHTML = '';

        let h1Element = document.createElement('h1');
        h1Element.innerText = 'Your scary story is saved!';

        mainDiv.appendChild(h1Element);
    }

    function editStory(event) {
        let fieldInfoElements = event.target.parentElement.firstChild.children

        firstName.value = fieldInfoElements[0].textContent.split(' ')[1];
        lastName.value = fieldInfoElements[0].textContent.split(' ')[2];
        age.value = Number(fieldInfoElements[1].textContent.replace('Age: ', ''));
        storyTitle.value = fieldInfoElements[2].textContent.replace('Title: ', '');
        story.value = fieldInfoElements[4].textContent;

        event.target.parentElement.remove()
        publishBtn.disabled = false;
    }

    function deleteStory(event) {
        let story = event.target.parentElement

        story.remove();
        publishBtn.disabled = false;
    }
}
