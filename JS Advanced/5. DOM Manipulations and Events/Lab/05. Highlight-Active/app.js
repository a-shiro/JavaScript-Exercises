function focused() {
    let nodes = Array.from(document.getElementsByTagName('input'));

    for (let node of nodes) {
        node.addEventListener('focus', function () {
            node.parentElement.classList.add('focused');
        })

        node.addEventListener('blur', function () {
            node.parentElement.classList.remove('focused');
        })
    }
}