function validate() {
    let emailField = document.getElementById('email');

    emailField.addEventListener('change', function (event) {
        let match = emailField.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

        !match ? emailField.classList.add('error') : emailField.classList.remove('error');
    })
}