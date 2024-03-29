import { getFormData, render } from "../utils.js";
import { showHomeView } from "../views/home.js";

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

                updateBtn.setAttribute('data-id', element._id);
                deleteBtn.setAttribute('data-id', element._id);

                updateBtn.addEventListener('click', updateCatch);
                deleteBtn.addEventListener('click', deleteCatch);

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

async function getCatchById(id) {
    const response = await fetch('http://localhost:3030/data/catches/' + id);
    const data = await response.json();

    console.log(data);
}

export async function addCatch(e) {
    e.preventDefault();

    const { angler, weight, species, location, bait, captureTime } = getFormData(e);

    if (angler !== '', weight !== '', species !== '', location !== '', bait !== '', captureTime !== '') {
        try {
            const response = await fetch('http://localhost:3030/data/catches', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.accessToken
                },
                body: JSON.stringify({
                    angler,
                    weight,
                    species,
                    location,
                    bait,
                    captureTime
                })
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

        } catch (err) {
            console.error(err.message);
        }
    }
}

async function updateCatch(e) {
    const id = e.target.getAttribute('data-id');
    const [angler, weight, species, location, bait, captureTime] = e.target.parentElement.querySelectorAll('input');
    
    const body = {
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value,
    };

    if (angler.value !== '', weight.value !== '', species.value !== '', location.value !== '', bait.value !== '', captureTime.value !== '') {
        try {
            const response = await fetch('http://localhost:3030/data/catches/' + id, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.accessToken
                },
                body: JSON.stringify(body)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    render(showHomeView);
}

async function deleteCatch(e) {
    const id = e.target.getAttribute('data-id');

    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete',
        headers: {
            'X-Authorization': sessionStorage.accessToken
        }
    });

    render(showHomeView);
}