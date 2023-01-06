function solve() {
    function finishTask(event) {
        const node = event.target.parentElement.parentElement.cloneNode(true);
        node.querySelector('div').remove();

        completeSection.children[1].appendChild(node);
        event.target.parentElement.parentElement.remove();
    }

    function startTask(event) {
        const node = event.target.parentElement.parentElement.cloneNode(true);
        const [deleteButton, finishButton] = node.querySelectorAll('button');

        deleteButton.classList.remove('green');
        deleteButton.classList.add('red');
        finishButton.classList.remove('red');
        finishButton.classList.add('orange');

        deleteButton.textContent = 'Delete';
        finishButton.textContent = 'Finish';

        deleteButton.addEventListener('click', deleteTask);
        finishButton.addEventListener('click', finishTask);

        inProgressSection.children[1].appendChild(node);
        event.target.parentElement.parentElement.remove();
    }

    function deleteTask(event) {
        event.target.parentElement.parentElement.remove();
    }

    function addTask(event) {
        event.preventDefault();

        const [name, date] = document.querySelectorAll('input');
        const description = document.querySelector('textarea').value;

        if (name.value === '' || date.value === '' || description === '') {
            return;
        }

        const divChild = openSection.children[1];

        const article = document.createElement('article')

        article.innerHTML = `
            <h3>${name.value}</h3>
            <p>Description: ${description}</p>
            <p>Due Date: ${date.value}</p>`;

        const div = document.createElement('div');
        div.classList.add('flex');

        const startButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        startButton.textContent = 'Start';
        deleteButton.textContent = 'Delete';

        startButton.classList.add('green');
        deleteButton.classList.add('red');

        startButton.addEventListener('click', startTask);
        deleteButton.addEventListener('click', deleteTask);

        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);
        divChild.appendChild(article);
    }

    const sections = document.querySelectorAll('section');
    const openSection = sections[1];
    const inProgressSection = sections[2];
    const completeSection = sections[3];

    document.querySelector('form').addEventListener('submit', addTask);
}