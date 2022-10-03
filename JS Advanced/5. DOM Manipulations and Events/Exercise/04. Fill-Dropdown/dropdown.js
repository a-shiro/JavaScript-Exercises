function addItem() {
    let userText = document.getElementById('newItemText').value;
    let userValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');

    option.textContent = userText;
    option.value = userValue;

    document.getElementById('menu').appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}