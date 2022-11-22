document.querySelector('#loadBooks').addEventListener('click', displayBooks);
document.querySelector('form').addEventListener('submit', onSubmit);

async function loadBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();

    return data;
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {title, author} = Object.fromEntries(formData.entries());

    const formButton = document.querySelector('form button');

    if (formButton.textContent === 'Submit') {
        await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'author': author,
                'title': title
            })
        })
    } else {
        const id = formButton.id

        await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'author': author,
                'title': title
            })
        })
    }

    const formTitle = document.querySelector('h3')

    formTitle.textContent = 'FORM';
    formButton.textContent = 'Submit';

    document.querySelectorAll('input').forEach(input => input.value = '')

    await displayBooks();
}

function editBook(event) {
    const formTitle = document.querySelector('h3')
    const formButton = document.querySelector('form button');

    formTitle.textContent = 'Edit FORM';
    formButton.textContent = 'Save';
    formButton.id = event.target.id;

    document.querySelector('[name="title"]').value =
        event.target.parentNode.parentNode.children[0].textContent;

    document.querySelector('[name="author"]').value =
        event.target.parentNode.parentNode.children[1].textContent;
}

async function deleteBook(event) {
    await fetch('http://localhost:3030/jsonstore/collections/books/' + event.target.id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    await displayBooks();
}

async function displayBooks() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const books = await loadBooks()

    for (let [id, book] of Object.entries(books)) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';

        editButton.id = id;
        deleteButton.id = id;

        editButton.addEventListener('click', editBook);
        deleteButton.addEventListener('click', deleteBook);

        tr.innerHTML =
            `<td>${book.title}</td>
             <td>${book.author}</td>`

        td.append(editButton);
        td.append(deleteButton);
        tr.append(td)
        tbody.append(tr);
    }
}

