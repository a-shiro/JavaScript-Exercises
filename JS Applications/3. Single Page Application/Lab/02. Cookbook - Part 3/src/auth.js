export async function onRegister(event) {
    event.preventDefault();

    const {email, password, rePass} = getFormFields(event);

    await sendRequest('http://localhost:3030/users/register', {email, password, rePass});
}

export async function onLogin(event) {
    event.preventDefault();

    const {email, password} = getFormFields(event);

    await sendRequest('http://localhost:3030/users/login', {email, password});
}

export function logout() {
    sessionStorage.clear();
    window.location = 'index.html';
}

export function isUserLogged() {
    if (sessionStorage.length === 0) {
        return document.querySelector('#guest').style.display = 'inline-block';
    }
    return document.querySelector('#user').style.display = 'inline-block';
}

export function getFormFields(event) {
    const formData = new FormData(event.target);

    return Object.fromEntries(formData.entries());
}

async function sendRequest(url, body) {
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            sessionStorage.setItem('accessToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            window.location = 'index.html';
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        console.error(err.message);
    }
}