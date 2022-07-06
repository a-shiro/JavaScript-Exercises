function calculateTotalNeededPrice(input) {

    let priceBeforeDiscount = input[0] * 7.61;
    let priceAfterDiscount = priceBeforeDiscount * 0.18;
    let finalPrice = priceBeforeDiscount - priceAfterDiscount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${priceAfterDiscount} lv.`);
}


calculateTotalNeededPrice(['550']);
calculateTotalNeededPrice(['150']);
