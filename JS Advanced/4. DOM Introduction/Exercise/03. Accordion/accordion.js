function toggle() {
    let moreText = document.getElementById('extra');

    if (moreText.style.display !== 'none') {
        moreText.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';

    } else {
        moreText.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }
}