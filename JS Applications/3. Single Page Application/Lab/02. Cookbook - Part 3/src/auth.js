// Login

export async function onLogin(event) {
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

// Logout

export function logout() {
    sessionStorage.clear()
    window.location = 'index.html'
}

// Register

export async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const {email, password, rePass} = Object.fromEntries(formData.entries());

    try {
        if (password !== rePass) {
            throw new Error("Passwords don't match!");
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, rePass})
        })

        const data = await response.json();

        if (response.ok) {
            sessionStorage.setItem('accessToken', data.accessToken);
            window.location = 'index.html';
        } else {
            throw new Error(data.message);
        }

    } catch (err) {
        console.log(err.message);
    }
}

export function isUserLogged() {
    if (sessionStorage.length === 0) {
        return document.querySelector('#guest').style.display = 'inline-block';
    }
    return document.querySelector('#user').style.display = 'inline-block';
}