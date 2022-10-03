function create(words) {
    let parent = document.getElementById('content');

    for (let word of words) {
        let div = document.createElement('div');
        div.addEventListener('click', toggleContentVisibility);

        let p = document.createElement('p');
        p.textContent = word
        p.style.display = 'none';

        div.appendChild(p);
        parent.appendChild(div);
    }

    function toggleContentVisibility(event) {
        let child = event.target.firstChild;

        child.style.display === 'none' ? child.style.display = 'block' : child.style.display = 'none';
    }
}