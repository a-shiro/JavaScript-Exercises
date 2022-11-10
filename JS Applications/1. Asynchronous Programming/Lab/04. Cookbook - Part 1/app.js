window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes()
    const cards = recipes.map(createCard)

    main.replaceChildren(...cards);
})

async function getRecipes() {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const data = await response.json();

    return Object.values(data);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);

    return await response.json();
}

function createCard(recipe) {
    const card = document.createElement('article');
    card.classList.add('preview');
    card.style.display = 'block';
    card.addEventListener('click', toggleCard);

    card.innerHTML = `<div class="title">
                          <h2>${recipe.name}</h2>
                      </div>
                      <div class="small">
                          <img src="${recipe.img}" alt="recipe-image">
                      </div>`

    return card;

    async function toggleCard() {
        const fullRecipeDetails = await getRecipeById(recipe._id);

        card.classList.remove('preview')
        card.innerHTML = `<h2>Title</h2>
                          <div class="band">
                              <div class="thumb">
                                  <img src="${fullRecipeDetails.img}">
                              </div>
                              <div class="ingredients">
                                  <h3>Ingredients:</h3>
                                  <ul></ul>
                              </div>
                          </div>
                          <div class="description">
                              <h3>Preparation:</h3>
                          </div>`

        const ul = card.querySelector('ul')

        fullRecipeDetails.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.innerText = ingredient;

            ul.append(li);
        })

        const div = card.querySelector('.description');

        fullRecipeDetails.steps.forEach(step => {
            const p = document.createElement('p');
            p.innerText = step;

            div.append(p);
        })
    }
}

