function encodeAndDecodeMessages() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let text = buttons[0].parentElement.querySelector('textarea').value.split('');


        for (let [idx, element] of text.entries()) {
            text[idx] = String.fromCharCode(element.charCodeAt(0) + 1);
        }

        buttons[1].parentElement.querySelector('textarea').value = text.join('');
        buttons[0].parentElement.querySelector('textarea').value = '';
    }

    function decode() {
        let text = buttons[1].parentElement.querySelector('textarea').value.split('');


        for (let [idx, element] of text.entries()) {
            text[idx] = String.fromCharCode(element.charCodeAt(0) - 1);
        }

        buttons[1].parentElement.querySelector('textarea').value = text.join('');
    }
}