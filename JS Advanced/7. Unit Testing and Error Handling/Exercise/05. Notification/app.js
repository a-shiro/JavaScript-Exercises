function notify(message) {
    let hiddenDiv = document.getElementById('notification');
    hiddenDiv.addEventListener('click', toggleVisibility);

    hiddenDiv.textContent = message;
    hiddenDiv.style.display = 'block';

    function toggleVisibility() {
        hiddenDiv.style.display = 'none';
    }
}