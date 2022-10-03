function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach(button => button.addEventListener('click', displayMore));

    function displayMore(event) {
        let profileLock = event.target.parentElement.querySelector('input[value=lock]');
        let hiddenDiv = event.target.parentElement.querySelector('div');

        if (!profileLock.checked && (hiddenDiv.style.display === '' || hiddenDiv.style.display === 'none')) {
            hiddenDiv.style.display = 'block';
            event.target.textContent = 'Hide it';
        } else if (!profileLock.checked) {
            hiddenDiv.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}