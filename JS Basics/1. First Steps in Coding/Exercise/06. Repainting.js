function calculateCost(input) {
    let protectiveCoverPrice = 1.5
    let paintCost = 14.5
    let paintThinnerCost = 5

    let extraBags = 0.4

    let requiredCover = Number(input[0])
    let requiredPaint = Number(input[1])
    let requiredPaintThinner = Number(input[2])
    let requiredWorksHours = Number(input[3])

    let coverExpenses = (requiredCover + 2) * protectiveCoverPrice
    let paintExpenses = (requiredPaint + (requiredPaint / 10)) * paintCost
    let paintThinnerExpenses = requiredPaintThinner * paintThinnerCost

    let totalMaterialExpenses = coverExpenses + paintExpenses + paintThinnerExpenses + extraBags
    let laborCostPerHour = totalMaterialExpenses * 0.3

    let totalExpenses = (laborCostPerHour * requiredWorksHours) + totalMaterialExpenses

    console.log(totalExpenses)
}

calculateCost([
    "10",
    "11",
    "4",
    "8"
])