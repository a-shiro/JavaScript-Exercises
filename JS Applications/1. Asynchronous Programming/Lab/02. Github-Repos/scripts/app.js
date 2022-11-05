function loadRepos() {
    const username = document.getElementById('username').value

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);
}

function handleResponse(response) {
    if (response.ok == false) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

function handleData(data) {
    const reposList = document.getElementById('repos')

    const reposChildren = [];

    data.forEach(repo => {
        const li = document.createElement('li');
        const a = document.createElement('a')

        a.href = repo.html_url;
        a.textContent = repo.full_name;

        li.append(a)
        reposChildren.push(li);
    })

    reposList.replaceChildren(...reposChildren);
}

function handleError(err){
    console.log(err)
}