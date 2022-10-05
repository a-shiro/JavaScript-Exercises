function solve() {
    let [generateButton, buyButton] = document.getElementsByTagName('button');

    generateButton.addEventListener('click', generateItems);
    buyButton.addEventListener('click', generateReceipt)

    function generateItems() {
        let items = JSON.parse(document.querySelector('textarea').value);
        let tbody = document.getElementsByTagName('tbody')[0];

        for (let item of items) {
            let tr = document.createElement('tr')

            tr.innerHTML = `<td><img src="${item.img}" alt=""/></td>
                            <td><p>${item.name}</p></td>
                            <td><p>${item.price}</p></td>
                            <td><p>${item.decFactor}</p></td>
                            <td><input type="checkbox"></td>`

            tbody.appendChild(tr)
        }
    }

    function generateReceipt() {
        let boughtFurnitureInfo = {
            'furniture': [],
            'totalCost': 0,
            'averageDecFactor': [],
        }

        let checkedItems = document.querySelectorAll('input');

        for (let item of checkedItems) {
            if (item.checked) {
                let pTags = item.parentElement.parentElement.querySelectorAll('td p');
                let counter = 1;

                for (let p of pTags) {
                    switch (true) {
                        case counter === 1:
                            boughtFurnitureInfo.furniture.push(p.textContent);
                            break;
                        case counter === 2:
                            boughtFurnitureInfo.totalCost += Number(p.textContent);
                            break;
                        case counter === 3:
                            boughtFurnitureInfo.averageDecFactor.push(Number(p.textContent));
                            break;
                    }

                    counter++;
                }
            }
        }

        let receipt = document.querySelectorAll('textarea')[1];

        receipt.value += `Bought furniture: ${boughtFurnitureInfo.furniture.join(', ')}\n`;
        receipt.value += `Total price: ${boughtFurnitureInfo.totalCost.toFixed(2)}\n`;

        let average = boughtFurnitureInfo.averageDecFactor.reduce((total, value) => total + value, 0) / boughtFurnitureInfo.furniture.length;
        receipt.value += `Average decoration factor: ${average}`;
    }
}