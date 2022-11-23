document.querySelector('#create-recipe-form').addEventListener('submit', createRecipe);

async function createRecipe(event) {
    event.preventDefault();

    const token = sessionStorage.getItem('accessToken');

    if (token !== null) {
        const formData = new FormData(event.target);

        let {name, img, ingredients, steps} = Object.fromEntries(formData.entries());

        ingredients = ingredients.split('\n');
        steps = steps.split('\n');

        await fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify({
                name,
                img,
                ingredients,
                steps,
            })
        })
    }

    window.location = 'index.html'
}