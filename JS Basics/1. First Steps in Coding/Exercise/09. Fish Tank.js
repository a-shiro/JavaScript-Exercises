function calculateWaterNeeded(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let occupiedPercent = Number(input[3]) / 100;

    let tankSpace = length * width * height
    let tankSpaceInLitres = tankSpace / 1000

    let neededLitres = tankSpaceInLitres * (1 - occupiedPercent)

    console.log(neededLitres)
}

calculateWaterNeeded([
    "85",
    "75",
    "47",
    "17"
]);

calculateWaterNeeded([
    "105",
    "77",
    "89",
    "18.5"
]);