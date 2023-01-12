const catchesDiv = document.querySelector('#catches');

export async function loadCatches() {
    try {
        const response = await fetch('http://localhost:3030/data/catches');
        const data = await response.json();

        if (response.ok) {
            const fragment = document.createDocumentFragment();
            catchesDiv.innerHTML = '';

            Array.from(data).forEach(element => {
                const div = document.createElement('div');
                const updateBtn = document.createElement('button');
                const deleteBtn = document.createElement('button');

                div.classList.add('catch');
                div.innerHTML = `
                    <label>Angler</label>
                    <input type="text" class="angler" value="${element.angler}">
                    <label>Weight</label>
                    <input type="text" class="weight" value="${element.weight}">
                    <label>Species</label>
                    <input type="text" class="species" value="${element.species}">
                    <label>Location</label>
                    <input type="text" class="location" value="${element.location}}">
                    <label>Bait</label>
                    <input type="text" class="bait" value="${element.bait}">
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${element.captureTime}">`;

                updateBtn.textContent = 'Update';
                deleteBtn.textContent = 'Delete';

                updateBtn.classList.add('update');
                deleteBtn.classList.add('delete');

                updateBtn.setAttribute('data-id', element._ownerId);
                deleteBtn.setAttribute('data-id', element._ownerId);

                updateBtn.addEventListener('click', () => {
                    console.log('update');
                })
                deleteBtn.addEventListener('click', () => {
                    console.log('delete');
                })

                if (element._ownerId !== sessionStorage.id) {
                    updateBtn.disabled = true;
                    deleteBtn.disabled = true;
                }

                div.append(updateBtn);
                div.append(deleteBtn);

                fragment.append(div);
            });

            catchesDiv.append(fragment);
        } else { 
            throw new Error(data.message);
        }

    } catch (err) {
        console.error(err.message);
    }
}