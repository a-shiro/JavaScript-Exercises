function createUserCard(user) {
    const main = document.querySelector('#main');

    const div = document.createElement('div');
    div.classList.add('profile');

    div.innerHTML =
        `<img src="./iconProfile2.png" class="userIcon" alt="profilePicture.png"/>
         <label>Lock</label>
         <input type="radio" name="user1Locked" value="lock" checked>
         <label>Unlock</label>
         <input type="radio" name="user1Locked" value="unlock"><br>
         <hr>
         <label>Username</label>
         <input type="text" name="user1Username" value="${user.username}" disabled readonly/>
         <div class="user1Username" style="display: none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${user.email}" disabled readonly/>
            <label>Age:</label>
            <input type="email" name="user1Age" value="${user.age}" disabled readonly/>
         </div>`

    const btn = document.createElement('button');
    btn.textContent = 'Show more'
    btn.addEventListener('click', toggleDetails)

    div.append(btn);
    main.append(div);


    function toggleDetails(event) {
        const unlocked = event.target.parentElement.querySelector('input[value=unlock]');

        if (unlocked.checked) {
            const details = event.target.parentElement.querySelector('.user1Username');

            details.style.display == 'none'
                ? details.style.display = 'block'
                : details.style.display = 'none';

            details.style.display == 'none'
                ? btn.textContent = 'Show more'
                : btn.textContent = 'Hide it';
        }
    }
}

async function getUsers() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

    return await response.json();
}

async function lockedProfile() {
    const users = await getUsers();

    console.log(users)

    Object.values(users).forEach(user => createUserCard(user));
}
