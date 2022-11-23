document.querySelector('#register-form').addEventListener('submit', onRegister);

async function onRegister(event) {
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