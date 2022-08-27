function calculateTotalCost(input) {
    let pensCount = Number(input[0]);
    let penPrice = 5.8;

    let markersCount = Number(input[1]);
    let markersPrice = 7.2;

    let boardCleanerCount = Number(input[2]);
    let boardCleanerPrice = 1.2;

    let discount = Number(input[3]) / 100;

    let totalPenCost = pensCount * penPrice;
    let totalMarkersCost = markersCount * markersPrice;
    let totalBoardCleanerCost = boardCleanerCount * boardCleanerPrice;

    let totalCost = (totalPenCost + totalMarkersCost + totalBoardCleanerCost);

    let costAfterDiscount = totalCost - (totalCost * discount);

    console.log(costAfterDiscount);
}


calculateTotalCost([
    '2',
    '3',
    '4',
    '25'
]);