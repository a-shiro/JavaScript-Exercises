function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let matchBy = document.getElementById('searchField').value;
        let trArray = Array.from(document.getElementsByTagName('tbody')[0].children);

        for (let tr of trArray) {
            for (let td of Array.from(tr.children)) {
                if (td.textContent.includes(matchBy) && matchBy !== '') {
                    tr.classList.add('select');
                    document.getElementById('searchField').value = '';
                    break;
                } else {
                    tr.classList.remove('select');
                }
            }
        }
    }
}

