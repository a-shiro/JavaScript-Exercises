function fillDetails(list, element, collection) {
    collection.forEach(item => {
        const requestedElement = document.createElement(element);
        requestedElement.innerText = item;

        list.append(requestedElement);
    });
}

function createCard(recipe) {
    const card = document.createElement('article');

    card.classList.add('preview');
    card.style.display = 'block';

    card.innerHTML = `<div class="title">
                          <h2>${recipe.name}</h2>
                      </div>
                      <div class="small">
                          <img src="${recipe.img}" alt="">
                      </div>`;

    card.addEventListener('click', toggleCard);

    return card;

    async function toggleCard() {
        const recipeDetails = await getRecipeById(recipe._id);

        card.classList.remove('preview');

        card.innerHTML = `<h2>${recipeDetails.name}</h2>
                          <div class="band">
                              <div class="thumb">
                                  <img src="${recipeDetails.img}" alt="">
                              </div>
                              <div class="ingredients">
                                  <h3>Ingredients:</h3>
                                  <ul></ul>
                              </div>
                          </div>
                          <div class="description">
                              <h3>Preparation:</h3>
                          </div>`;

        const ingredientsList = card.querySelector('ul');
        const preparationSteps = card.querySelector('.description');

        fillDetails(ingredientsList, 'li', recipeDetails.ingredients);
        fillDetails(preparationSteps, 'p', recipeDetails.steps);
    }
}

function displayCards(cards) {
    const main = document.querySelector('main');

    main.replaceChildren(...cards);
}

async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
    const data = await response.json();

    return Object.values(data);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const data = await response.json();

    return data;
}

function isUserLogged() {
    if (sessionStorage.length === 0) {
        return document.querySelector('#guest').style.display = 'inline-block';
    }

    return document.querySelector('#user').style.display = 'inline-block';
}