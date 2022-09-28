function colorize() {
    let rows = document.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 === 1) {
            rows[i].style.backgroundColor = 'teal';
        }
    }
}