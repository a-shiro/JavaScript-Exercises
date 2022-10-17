window.addEventListener("load", solve);

function solve() {
    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');

    let publishButton = document.getElementById('publish-btn');
    publishButton.addEventListener('click', publish);

    let clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clear);

    function publish() {
        if (!title.value || !category.value || !content.value) {
            return;
        }

        let reviewList = document.getElementById('review-list');
        let liElement = document.createElement('li');
        liElement.classList.add('rpost');

        liElement.innerHTML = `<article>
                                <h4>${title.value}</h4>
                                <p>Category: ${category.value}</p>
                                <p>Content: ${content.value}</p>
                               </article>
                               <button class="action-btn edit">Edit</button>
                               <button class="action-btn approve">Approve</button>`;

        liElement.children[1].addEventListener('click', edit);
        liElement.children[2].addEventListener('click', approve);

        reviewList.appendChild(liElement);

        title.value = '';
        category.value = '';
        content.value = '';
    }


    function edit(event) {
        let parent = event.target.parentElement;

        title.value = parent.firstChild.children[0].textContent;
        category.value = parent.firstChild.children[1].textContent.replace('Category: ', '');
        content.value = parent.firstChild.children[2].textContent.replace('Content: ', '');

        parent.remove();
    }

    function approve(event) {
        let parent = event.target.parentElement;

        let publishedList = document.getElementById('published-list');
        let liElement = document.createElement('li');
        liElement.classList.add('rpost');

        liElement.innerHTML = `<article>
                                <h4>${parent.firstChild.children[0].textContent}</h4>
                                <p>${parent.firstChild.children[1].textContent}</p>
                                <p>${parent.firstChild.children[2].textContent}</p>
                               </article>`;

        publishedList.appendChild(liElement);
        parent.remove();
    }

    function clear() {
        let publishedList = document.getElementById('published-list');
        publishedList.innerHTML = '';
    }
}
