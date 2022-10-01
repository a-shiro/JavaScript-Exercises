function deleteByEmail() {
    let tableContent = Array.from(document.querySelectorAll('tbody tr'));
    let userInput = document.getElementsByName('email')[0].value;
    let matchFound = false;

    for (let tr of tableContent) {
        let email = tr.children[1].textContent;

        if (userInput === email) {
            tr.remove();
            document.getElementById('result').textContent = 'Deleted';
            matchFound = true;
            break;
        }
    }

    if (!matchFound) {
        document.getElementById('result').textContent = 'Not found.';
    }
}