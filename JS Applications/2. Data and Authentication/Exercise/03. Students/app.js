document.querySelector('#form').addEventListener('submit', createRecord);

displayStudents();

async function createRecord(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let {firstName, lastName, facultyNumber, grade} = Object.fromEntries(formData.entries());

    if (firstName && lastName && facultyNumber && grade) {
        await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName, facultyNumber, grade})
        })
    }

    document.querySelectorAll('input').forEach(input => input.value = '')

    await displayStudents();
}

async function displayStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const students = await response.json();

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    for (let student of Object.values(students)) {
        const tr = document.createElement('tr');

        tr.innerHTML =
            `<td>${student.firstName}</td>
             <td>${student.lastName}</td>
             <td>${student.facultyNumber}</td>
             <td>${student.grade}</td>`

        tbody.append(tr);
    }
}

