window.addEventListener("load", solve);

function solve() {
    let carMake = document.getElementById('make');
    let carModel = document.getElementById('model');
    let carYear = document.getElementById('year');
    let carFuelType = document.getElementById('fuel');
    let carOriginalPrice = document.getElementById('original-cost');
    let carSellingPrice = document.getElementById('selling-price');

    let publishButton = document.getElementById('publish')
    publishButton.addEventListener('click', createListing)

    let profit = 0

    function createListing(event) {
        event.preventDefault()

        if (!carMake.value || !carModel.value || !carYear.value || !carFuelType.value || !carOriginalPrice.value || !carSellingPrice.value) {
            return;
        }

        if (carOriginalPrice.value > carSellingPrice.value) {
            return;
        }

        publish([carMake, carModel, carYear, carFuelType, carOriginalPrice, carSellingPrice]);
    }


    function publish(input) {
        let tbodyElement = document.getElementById('table-body');

        let trElement = document.createElement('tr');

        trElement.innerHTML = `<td>${carMake.value}</td>
                               <td>${carModel.value}</td>
                               <td>${carYear.value}</td>
                               <td>${carFuelType.value}</td>
                               <td>${carOriginalPrice.value}</td>
                               <td>${carSellingPrice.value}</td>
                               <td>
                                 <button class="action-btn edit">Edit</button>
                                 <button class="action-btn sell">Sell</button>
                               </td>`;

        trElement.lastChild.children[0].addEventListener('click', edit);
        trElement.lastChild.children[1].addEventListener('click', sell);

        tbodyElement.appendChild(trElement);

        input.forEach(field => field.value = '');
    }

    function edit(event) {
        let row = event.target.parentElement.parentElement;
        let makeText = row.querySelector('td:nth-of-type(1)').textContent;
        let modelText = row.querySelector('td:nth-of-type(2)').textContent;
        let yearText = row.querySelector('td:nth-of-type(3)').textContent;
        let fuelText = row.querySelector('td:nth-of-type(4)').textContent;
        let originalPriceText = row.querySelector('td:nth-of-type(5)').textContent;
        let sellingPriceText = row.querySelector('td:nth-of-type(6)').textContent;

        document.getElementById('make').value = makeText;
        document.getElementById('model').value = modelText;
        document.getElementById('year').value = yearText;
        document.getElementById('fuel').value = fuelText;
        document.getElementById('original-cost').value = originalPriceText;
        document.getElementById('selling-price').value = sellingPriceText;

        row.remove();
    }

    function sell(event) {
        let row = event.target.parentElement.parentElement;
        let makeText = row.querySelector('td:nth-of-type(1)').textContent;
        let modelText = row.querySelector('td:nth-of-type(2)').textContent;
        let yearText = row.querySelector('td:nth-of-type(3)').textContent;
        let originalPriceText = row.querySelector('td:nth-of-type(5)').textContent;
        let sellingPriceText = row.querySelector('td:nth-of-type(6)').textContent;

        let profitMade = Number(sellingPriceText) - Number(originalPriceText);

        let ulElement = document.getElementById('cars-list');

        let liElement = document.createElement('li');
        liElement.classList.add('each-list');

        liElement.innerHTML = `<span>${makeText} ${modelText}</span>
                               <span>${yearText}</span>
                               <span>${profitMade}</span>`;

        ulElement.appendChild(liElement);

        profit += profitMade;
        document.getElementById('profit').textContent = profit.toFixed(2);

        row.remove();
    }
}
