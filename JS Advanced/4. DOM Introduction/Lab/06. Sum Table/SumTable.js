function sumTable() {
    let dataCells = document.querySelectorAll('table tr');

    let result = 0;

    for (let i = 1; i < dataCells.length; i++) {
        let children = dataCells[i].children;
        result += Number(children[1].textContent);
    }

    document.getElementById('sum').textContent = String(result);
}