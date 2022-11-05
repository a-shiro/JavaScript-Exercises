function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value
    const commitsList = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
        .then(response => {
            if (response.ok == false) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }

            return response.json()
        })
        .then(data => {
            const commitsChildren = [];
            console.log(data)
            data.forEach(element => {
                const li = document.createElement('li');
                li.textContent = `${element.commit.author.name}: ${element.commit.message}`

                commitsChildren.push(li);
            })

            commitsList.replaceChildren(...commitsChildren);
        })
        .catch(error => {
            const li = document.createElement('li');

            li.textContent = error.message
            commitsList.append(li)
        })
}