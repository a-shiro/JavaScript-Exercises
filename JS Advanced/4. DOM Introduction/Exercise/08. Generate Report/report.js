function generateReport() {
    let fields = {};
    let tableColumnNames = Array.from(document.querySelector('thead tr').cells);

    for (let th of tableColumnNames) {
        let name = th.querySelector('input').name;
        fields[name] = th.querySelector('input').checked;
    }

    let resultJSON = [];

    let tableContent = document.querySelectorAll('tbody tr');

    for (let tr of tableContent) {
        let object = createObj(tr);

        resultJSON.push(object);
    }

    document.getElementById('output').textContent = JSON.stringify(resultJSON);

    function createObj(tr) {
        let object = {}

        for (let field of Object.keys(fields)) {
            if (fields[field] === true) {
                let child = Object.keys(fields).indexOf(field);

                object[field] = tr.cells[child].textContent;
            }
        }

        return object;
    }
}