import {html, render} from 'https://unpkg.com/lit-html?module';
import {contacts as data} from "./contacts.js";


const contacts = data.map(c => Object.assign({}, c, {active: false}))

const root = document.getElementById('contacts');

const contactCard = (contact) => html`
  <div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${contact.name}</h2>
      <button id=${contact.id} class="detailsBtn">Details</button>

      ${contact.active
              ? html`
                <div class="details">
                  <p>Phone number: ${contact.phoneNumber}</p>
                  <p>Email: ${contact.email}</p>
                </div>`
              : html`
                <div class="details">
                  <p>Phone number: ${contact.phoneNumber}</p>
                  <p>Email: ${contact.email}</p>
                </div>`}
    </div>
  </div>`

root.addEventListener('click', toggleDetails);

render(contacts.map(contactCard), root);

function toggleDetails(event) {
    if (event.target.classList.contains('detailsBtn')) {
        const id = event.target.id;
        const contact = contacts.find(c => c.id == id);

        contact.active = !contact.active;

        render(contacts.map(contactCard), root);
    }
}