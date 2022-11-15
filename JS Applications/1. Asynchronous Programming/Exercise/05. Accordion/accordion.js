function displayArticles(article) {
    const main = document.querySelector('#main');

    const div = document.createElement('div');
    div.classList.add('accordion');

    div.innerHTML =
        `<div class="head">
            <span>${article.title}</span>
            <button class="button" id="${article._id}">More</button>
        </div>
        <div class="extra">
        </div>`

    const moreBtn = div.querySelector('.button');
    moreBtn.addEventListener('click', showMore);

    main.append(div);

    async function showMore(e) {
        const details = div.querySelector('.extra');
        const style = getComputedStyle(details);

        if (style.display === 'none') {
            const articleId = e.target.id;
            const articleDetails = await getArticles('http://localhost:3030/jsonstore/advanced/articles/details/', articleId);

            const p = document.createElement('p');
            p.textContent = articleDetails.content;

            details.append(p);

            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }

        moreBtn.textContent = moreBtn.textContent === 'More' ? 'Less' : 'More';
    }
}

async function getArticles(url, id = '') {
    const response = await fetch(url + id);

    return await response.json();
}

async function solution() {
    const articles = await getArticles('http://localhost:3030/jsonstore/advanced/articles/list');

    Object.values(articles).forEach(displayArticles);
}

solution();
