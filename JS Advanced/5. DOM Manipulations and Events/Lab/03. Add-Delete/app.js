function addItem() {
    let ul = document.getElementById('items');
    let userInput = document.getElementById('newItemText').value;

    ul.addEventListener('click', function (event) {
        event.target.parentElement.remove()
    });

    let li = document.createElement('li');
    li.innerHTML = `${userInput} <a href="#">[Delete]</a>`

    ul.appendChild(li);
}

