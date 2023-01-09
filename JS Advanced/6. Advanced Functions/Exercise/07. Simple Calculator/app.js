function calculator() {
    const [x, y, result] = document.querySelectorAll('input')
    
    const calculate = {
        init: () => {
            window.calculate = calculate;
        },
        add: () => {
            result.value = Number(x.value) + Number(y.value);
        },
        subtract: () => {
            result.value = Number(x.value) - Number(y.value);
        }
    }

    return calculate.init();
}




