async function getRecipes() {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const data = await response.json();

    return Object.values(data);
}

function createDisplayCards(recipes) {
    const articles = [];

    recipes.forEach(object => {
        const article = document.createElement('article');
        article.classList.add('preview')

        article.innerHTML = `<div class="title">
                                <h2>${object.name}</h2>
                            </div>
                             <div class="small">
                                  <img src="${object.img}" alt="recipe-img">
                             </div>`

        articles.push(article);
    });

    return articles;
}

window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes()

    const recipeCards = createDisplayCards(recipes)

    main.replaceChildren(...recipeCards);
})
