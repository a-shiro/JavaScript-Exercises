function sortList (productList) {
    function print(product, idx) {
        console.log(`${idx + 1}.${product}`);
    }

    productList = productList.sort();
    productList.forEach(print, 0);
}

sortList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);