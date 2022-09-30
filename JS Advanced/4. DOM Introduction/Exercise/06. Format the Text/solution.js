function solve() {
    let text = document.getElementById('input').value.split('.');
    text.pop();

    if (text) {
        let counter = 3;

        for (let sentence of text) {
            if (counter === 3) {
                let p = document.createElement('p');
                document.getElementById('output').appendChild(p);

                counter = 0;
            }

            document.getElementById('output').lastChild.textContent += sentence + '.'
            counter++;
        }
    }
}

