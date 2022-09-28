function extractText() {
    let items = document.getElementsByTagName('li');
    let textArea = document.getElementById('result');

    for (let item of items) {
        textArea.textContent += `${item.textContent}\n`
    }
}