document.querySelector('#login-form').addEventListener('submit', onLogin)

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const data = await response.json();

        if (response.ok) {
            sessionStorage.setItem('accessToken', data.accessToken);
            window.location = 'index.html';

        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        console.error(err.message);
    }
}