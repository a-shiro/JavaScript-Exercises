import {html, nothing} from '../lib.js';
import {getById, deleteById} from "../api/data.js";

const detailsTemplate = (album, activeUser, isOwner, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src="${album.imageUrl}" alt="example1"/>
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">${album.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>

      ${activeUser
              ?
              isOwner
                      ?
                      html`
                        <div id="action-buttons">
                          <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                        </div>`
                      : html`
                        <div id="action-buttons">
                          <a href="javascript:void(0)" id="like-btn">Like</a>
                        </div>`
              : nothing
      }

    </div>
  </section>`

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const album = await getById(id);

    const activeUser = Boolean(ctx.user);
    const isOwner = activeUser && ctx.user._id == album._ownerId;

    ctx.render(detailsTemplate(album, activeUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
}