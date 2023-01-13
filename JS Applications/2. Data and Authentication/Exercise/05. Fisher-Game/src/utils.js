const sections = document.querySelectorAll('section');
const welcomeSpan = document.querySelector('nav p span');
const loginBtn = document.querySelector('#login');
const registerBtn = document.querySelector('#register');
const logoutBtn = document.querySelector('#logout');

export function hideSections() {
    sections.forEach(x => {
        x.style.display = 'none';
    });
}

export function render(view) {
    view();

    if (sessionStorage.length > 1) {
        welcomeSpan.textContent = sessionStorage.email
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        welcomeSpan.textContent = 'guest';
        loginBtn.style.display = 'inline-block';
        registerBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
    }
}

export function getFormData(e) {
    const formData = new FormData(e.target);

    return Object.fromEntries(formData.entries());
}