function solve() {
    const onScreenButton = document.querySelector('#add-new');
    const clearArchiveButton = document.querySelector('#archive button')

    onScreenButton.addEventListener('submit', (event) => {
        event.preventDefault();

        const fields = Array.from(document.querySelectorAll('input'));
        const [name, hall, ticketPrice] = fields;

        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '') {
            const ul = document.querySelector('#movies ul');
            const li = document.createElement('li');
            const div = document.createElement('div');
            const button = document.createElement('button');

            li.innerHTML = `
            <span>${name.value}</span>
            <strong>Hall: ${hall.value}</strong>`;

            div.innerHTML = `
                <strong>${ticketPrice.value}</strong>
                <input id="total-tickets" placeholder="Tickets Sold">`;

            button.textContent = 'Archive';
            button.addEventListener('click', (event) => {
                const totalTickets = document.querySelector('#total-tickets').value

                const ul = document.querySelector('#archive ul');
                const li = document.createElement('li');
                const button = document.createElement('button');

                li.innerHTML = `
                    <span>${name.value}</span>
                    <strong>Total Amount: ${(Number(totalTickets) * Number(ticketPrice.value)).toFixed(2)}</strong>`;

                button.textContent = 'Delete';
                button.addEventListener('click', (event) => {
                    event.target.parentElement.remove()
                })

                li.appendChild(button);
                ul.appendChild(li);

                event.target.parentElement.parentElement.remove();
            })

            div.appendChild(button);
            li.appendChild(div);
            ul.appendChild(li);

            fields.forEach(field => field.value = '')
        }
    })


    clearArchiveButton.addEventListener('click', () => {
        document.querySelector('#archive ul').innerHTML = '';
    })
}