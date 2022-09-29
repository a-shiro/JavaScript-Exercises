function solve() {
    function convert(textInput, namingConvention) {
        let result = [];
        let iterable = textInput.split(' ')

        switch (namingConvention) {
            case 'Camel Case':
                result.push(iterable.shift().toLowerCase());

                for (let element of iterable) {
                    element = element.toLowerCase();
                    element = element[0].toUpperCase() + element.slice(1);

                    result.push(element);
                }
                break;
            case 'Pascal Case':
                for (let element of iterable) {
                    element = element.toLowerCase();
                    element = element[0].toUpperCase() + element.slice(1);

                    result.push(element);
                }
                break;
            default:
                result = ['Error!'];
        }

        return result.join('');
    }

    let textInput = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;

    document.getElementById('result').textContent = convert(textInput, namingConvention);
}