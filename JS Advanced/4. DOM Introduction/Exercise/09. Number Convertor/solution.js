function solve() {
    document.querySelector('button').addEventListener('click', () => {
        let decimal = document.querySelector('#input').value;
        const convertTo = selectMenuTo.value;

        switch (convertTo) {
            case 'binary':
                let binary = "";
                while (decimal > 0) {
                    if (decimal & 1) {
                        binary = "1" + binary;
                    } else {
                        binary = "0" + binary;
                    }
                    decimal = decimal >> 1;
                }

                document.querySelector('#result').value = binary
                break;
            case 'hexadecimal':
                document.querySelector('#result').value = Number(decimal).toString(16).toUpperCase()
                break;
        }
    });

    const selectMenuTo = document.querySelector('#selectMenuTo');

    selectMenuTo.innerHTML = `
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>`
}
