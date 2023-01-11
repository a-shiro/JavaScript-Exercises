import { render } from "../utils.js";

export async function loginUser(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

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
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('id', data._id);
                sessionStorage.setItem('accessToken', data.accessToken);

                render(document.querySelector('#home-view'))

            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            console.error(err.message);
        }

    }
}