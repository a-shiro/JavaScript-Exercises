import {getFormFields} from "./auth.js";

export async function createRecipe(event) {
    event.preventDefault();

    const token = sessionStorage.getItem('accessToken');

    if (token !== null) {
        let {name, img, ingredients, steps} = getFormFields(event)

        ingredients = ingredients.split('\n');
        steps = steps.split('\n');

        await sendRequest({name, img, ingredients, steps}, token);
    }
}

async function sendRequest(body, token) {
    try {
        if (!body.name || !body.img || body.ingredients[0] === '' || body.steps[0] === '') {
            throw new Error('All fields are required!')
        }

        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify(body)
        })

        const data = await response.json();

        if (response.ok) {
            window.location = 'index.html';
        } else {
            throw new Error(data.message);
        }

    } catch (error) {
        console.error(error.message);
    }
}
