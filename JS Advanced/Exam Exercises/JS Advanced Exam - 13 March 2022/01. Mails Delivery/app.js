function solve() {
    let emailField = document.getElementById('recipientName');
    let mailTitleField = document.getElementById('title');
    let messageField = document.getElementById('message');

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (!emailField.value || !mailTitleField.value || !messageField.value) {
            return;
        }

        let mailsList = document.getElementById('list');

        let liElement = document.createElement('li');
        liElement.innerHTML = `<h4>Title: ${mailTitleField.value}</h4>
                               <h4>Recipient Name: ${emailField.value}</h4>
                               <span>${messageField.value}</span>
                               <div id="list-action">
                                <button type="submit" id="send">Send</button>
                                <button type="submit" id="delete">Delete</button>
                               </div>`;

        let sendBtn = liElement.querySelector('div').children[0];
        let deleteBtn = liElement.querySelector('div').children[1];

        sendBtn.addEventListener('click', (e) => {
            let parentElement = e.target.parentElement.parentElement

            let title = parentElement.children[0].textContent.replace('Title: ', '');
            let sentTo = parentElement.children[1].textContent.replace('Recipient Name: ', '');

            let sentMailsList = document.getElementsByClassName('sent-list')[0];

            let liElement = document.createElement('li');
            liElement.innerHTML = `<span>To: ${sentTo}</span>
                                   <span>Title: ${title}</span>
                                   <div class="btn">
                                    <button type="submit" class="delete">Delete</button>
                                   </div>`;

            sentMailsList.appendChild(liElement);

            let deleteBtn = liElement.querySelector('div').children[0];
            deleteBtn.addEventListener('click', (e) => {
                let parentElement = e.target.parentElement.parentElement;

                let deletedMailsList = document.getElementsByClassName('delete-list')[0];
                let liElement = document.createElement('li');

                let sentTo = parentElement.children[0].textContent.split(': ')[1];
                let title = parentElement.children[1].textContent.split(': ')[1];

                liElement.innerHTML = `<span>To: ${sentTo}</span>
                                       <span>Title: ${title}</span>`;

                deletedMailsList.appendChild(liElement);

                parentElement.remove();
            })

            parentElement.remove();
        });

        deleteBtn.addEventListener('click', (e) => {
            let parentElement = e.target.parentElement.parentElement;

            let deletedMailsList = document.getElementsByClassName('delete-list')[0];
            let liElement = document.createElement('li');

            let sentTo = parentElement.children[1].textContent.split(': ')[1];
            let title = parentElement.children[0].textContent.split(': ')[1];

            liElement.innerHTML = `<span>To: ${sentTo}</span>
                                   <span>Title: ${title}</span>`;

            deletedMailsList.appendChild(liElement);

            parentElement.remove();
        });

        mailsList.appendChild(liElement);
    })

    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();

        emailField.value = '';
        mailTitleField.value = '';
        messageField.value = '';
    })
}

solve()

