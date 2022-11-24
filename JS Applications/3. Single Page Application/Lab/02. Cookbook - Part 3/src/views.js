export function hideViews() {
    const sections = document.querySelectorAll('section')

    sections.forEach(section => section.style.display = 'none');
}

export function toggleActiveBtn(currentAnchor) {
    document.querySelector('nav .active').classList.remove('active');

    currentAnchor.classList.add('active');
}

export function showHomeView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#homeView').style.display = 'block';
}

export function showLoginView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#loginView').style.display = 'block';
}

export function showRegisterView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#registerView').style.display = 'block';
}

export function showCreateRecipeView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(event.target);

    document.querySelector('#createRecipeView').style.display = 'block';
}