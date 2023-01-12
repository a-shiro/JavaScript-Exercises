import { render } from "../utils.js";
import { showHomeView } from "../views/home.js";

export async function loginUser(e) {
    e.preventDefault();

    const { email, password } = getFormData(e);

    if (email !== '' && password !== '') {
        try {
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('id', data._id);
                sessionStorage.setItem('accessToken', data.accessToken);

                render(showHomeView);

            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            console.error(err.message);
        }

    }
}

export async function registerUser(e) {
    e.preventDefault();

    const { email, password, rePass } = getFormData(e);

    if (email !== '' && password !== '' && rePass !== '' && rePass === password) {
        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, rePass })
            });

            const data = await response.json();

            if (response.ok) {
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('id', data._id);
                sessionStorage.setItem('accessToken', data.accessToken);

                render(showHomeView);

            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            console.error(err.message);
        }

    }
}

export async function logoutUser() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.accessToken
        }
    });

    if (response.ok) {
        sessionStorage.clear();

        render(showHomeView);
    }
}


function getFormData(e) {
    const formData = new FormData(e.target);

    return Object.fromEntries(formData.entries());
}

