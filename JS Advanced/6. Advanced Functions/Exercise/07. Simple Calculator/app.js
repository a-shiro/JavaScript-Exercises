function calculator() {
    return {
        init: (x, y, result) => {
            this.x = document.querySelector(x);
            this.y = document.querySelector(y);
            this.result = document.querySelector(result);
        },
        add: () => {
            this.result.value = Number(this.x.value) + Number(this.y.value);
        },
        subtract: () => {
            this.result.value = Number(this.x.value) - Number(this.y.value);
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




