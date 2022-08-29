function calcAreaOfShape(input) {
    let area;

    let shape = input[0];

    if (shape === 'square') {
        let side = Number(input[1]);

        area = side * side;

    } else if (shape === 'rectangle') {
        let length = Number(input[1]);
        let width = Number(input[2]);

        area = length * width;

    } else if (shape === 'circle') {
        let radius = Number(input[1])

        area = Math.PI * Math.pow(radius, 2)

    } else if (shape === 'triangle') {
        let height = Number(input[1])
        let width = Number(input[2])

        area = (height * width) / 2
    }


    console.log(area.toFixed(3))
}

calcAreaOfShape([
    "square",
    "5"
]);
calcAreaOfShape([
    "rectangle",
    "7",
    "2.5"
]);
calcAreaOfShape([
    "circle",
    "6"
]);
calcAreaOfShape([
    "triangle",
    "4.5",
    "20"
]);