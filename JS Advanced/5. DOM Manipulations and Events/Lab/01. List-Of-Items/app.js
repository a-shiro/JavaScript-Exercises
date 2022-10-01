function addItem() {
    let ul = document.getElementById('items');

    let userInput = document.getElementById('newItemText').value;

    let li = document.createElement('li');

    li.textContent = userInput;

    ul.appendChild(li);
}