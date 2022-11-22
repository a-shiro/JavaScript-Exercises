async function deleteContact(event) {
    const id = event.target.id;

    await fetch(`http://localhost:3030/jsonstore/phonebook/` + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    await loadContacts();
}

async function createContact() {
    let personField = document.querySelector('#person');
    let phoneField = document.querySelector('#phone');

    const person = personField.value;
    const phone = phoneField.value;

    if (person && phone) {
        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: person.trim(),
                phone: phone.trim()
            })
        })
    }

    personField.value = '';
    phoneField.value = '';

    await loadContacts();
}

async function loadContacts() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const contacts = await response.json();

    const phonebook = document.querySelector('#phonebook');
    phonebook.innerHTML = '';

    Object.values(contacts).forEach(contact => {
        const li = document.createElement('li');
        const button = document.createElement('button');

        button.textContent = 'Delete';
        button.id = contact._id;
        button.addEventListener('click', deleteContact);

        li.innerHTML = `${contact.person}: ${contact.phone}`;
        li.append(button);

        phonebook.append(li);
    })
}

function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', loadContacts);
    document.querySelector('#btnCreate').addEventListener('click', createContact);
}

attachEvents();