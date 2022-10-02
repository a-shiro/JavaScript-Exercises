function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', function (event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);

        document.getElementById('result').textContent = power + '%'
    });

    gradient.addEventListener('mouseout', function (event) {
        document.getElementById('result').textContent = "";
    })
}