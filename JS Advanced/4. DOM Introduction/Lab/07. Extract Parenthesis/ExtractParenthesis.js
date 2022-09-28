function extract(content) {
    let text = document.getElementById('content').textContent;

    let matches = text.match(/\(([^)]+)\)/g);

    let result = [];

    matches.forEach(function printing(element) {
        result.push(element.slice(1, element.length - 1));
    })

    return result.join('; ');
}