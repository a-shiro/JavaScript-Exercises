function calculateDeliveryPrice(input) {
    let chickenMenuPrice = 10.35
    let fishMenuPrice = 12.40
    let vegetarianMenuPrice = 8.15

    let deliveryPrice = 2.50

    let chickenOrderCount = Number(input[0])
    let fishOrderCount = Number(input[1])
    let vegetarianOrderCount = Number(input[2])

    let totalPrice = (chickenOrderCount * chickenMenuPrice) + (fishOrderCount * fishMenuPrice) +
        (vegetarianOrderCount * vegetarianMenuPrice)

    let desertPrice = totalPrice * 0.2

    console.log(totalPrice + desertPrice + deliveryPrice)
}


calculateDeliveryPrice([
    "2",
    "4",
    "3"
])


