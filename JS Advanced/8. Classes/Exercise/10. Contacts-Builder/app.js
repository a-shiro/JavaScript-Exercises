class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.headingDiv) {
            this.headingDiv.className = this._online ? 'title online' : 'title';
        }
    }

    render(id) {
        const parent = document.querySelector(`#${id}`);

        const article = document.createElement('article');

        this.headingDiv = document.createElement('div');
        const infoButton = document.createElement('button');
        this.headingDiv.classList.add('title');
        this.headingDiv.textContent = `${this.firstName} ${this.lastName}`;

        infoButton.textContent = '\u2139';
        infoButton.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        })
        const infoDiv = document.createElement('div');
        const phoneSpan = document.createElement('span');
        const emailSpan = document.createElement('span');

        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';

        phoneSpan.innerHTML = `&phone; ${this.phone}`;
        emailSpan.innerHTML = `&#9993; ${this.email}`;

        this.headingDiv.appendChild(infoButton);
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);
        article.appendChild(this.headingDiv);
        article.appendChild(infoDiv);
        parent.appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

setTimeout(() => contacts[1].online = true, 2000);
