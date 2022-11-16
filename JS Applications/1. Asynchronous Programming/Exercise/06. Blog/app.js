function display(post, comments) {
    const postTitle = document.querySelector('#post-title');
    const postBody = document.querySelector('#post-body');
    const postComments = document.querySelector('#post-comments');
    postComments.innerHTML = '';

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment.text;
        li.id = comment.id;

        postComments.append(li);
    })
}

async function getComments() {
    const response = await fetch('http://localhost:3030/jsonstore/blog/comments');

    return await response.json();
}

async function getPosts(id = '') {
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts/' + id);

    return await response.json();
}

async function viewPost() {
    const postId = document.querySelector('select').value;

    const comments = await getComments();

    const post = await getPosts(postId)
    const postComments = Object.values(comments).filter(comment => comment.postId === postId);

    display(post, postComments);
}

async function loadPosts() {
    const posts = await getPosts();

    const select = document.querySelector('#posts');
    select.innerHTML = '';

    Object.values(posts).forEach(post => {
        const option = document.createElement('option');

        option.value = post.id;
        option.textContent = post.title;

        select.append(option);
    })
}

function attachEvents() {
    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    const viewPostBtn = document.querySelector('#btnViewPost');

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostBtn.addEventListener('click', viewPost);
}

attachEvents();