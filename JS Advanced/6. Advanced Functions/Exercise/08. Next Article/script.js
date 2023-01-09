function getArticleGenerator(articles) {
    const content = document.querySelector('#content');

    return () => {
        const articleContent = articles.shift();

        if (articleContent) {
            const articleElement = document.createElement('article');
            articleElement.textContent = articleContent;

            content.appendChild(articleElement);
        }
    }
}
