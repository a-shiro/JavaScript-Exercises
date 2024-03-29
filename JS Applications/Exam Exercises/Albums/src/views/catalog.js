import {html} from '../lib.js';
import {getAll} from "../api/data.js";

const catalogTemplate = (albums) => html`
  <section id="dashboard">
    <h2>Albums</h2>
    ${albums.length === 0
            ? html` <h2>There are no albums added yet.</h2>`
            : html`
              <ul class="card-wrapper">${albums.map(albumCard)}</ul>`
    }
  </section>`

const albumCard = (album) => html`
  <li class="card">
    <img src="${album.imageUrl}" alt="travis"/>
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/catalog/${album._id}">Details</a>
  </li>`

export async function showCatalog(ctx) {
    const albums = await getAll();

    ctx.render(catalogTemplate(albums));
}