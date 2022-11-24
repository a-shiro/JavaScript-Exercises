export function hideViews() {
    const sections = document.querySelectorAll('section')

    sections.forEach(section => section.style.display = 'none');
}

export function toggleActiveBtn(anchor) {
    document.querySelector('nav .active').classList.remove('active');

    anchor.classList.add('active');
}

export function showHomeView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(document.querySelector('#homeBtn'));

    document.querySelector('#homeView').style.display = 'block';
}

export function showLoginView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(document.querySelector('#loginBtn'));

    document.querySelector('#loginView').style.display = 'block';
}

export function showRegisterView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(document.querySelector('#registerBtn'));

    document.querySelector('#registerView').style.display = 'block';
}

export function showCreateRecipeView(event) {
    event.preventDefault();

    hideViews();
    toggleActiveBtn(document.querySelector('#createRecipeBtn'));

    document.querySelector('#createRecipeView').style.display = 'block';
}

export function showRecipeDetailsView(event) {
    event.preventDefault();

    hideViews();

    document.querySelector('#recipeDetailsView').style.display = 'block';
}