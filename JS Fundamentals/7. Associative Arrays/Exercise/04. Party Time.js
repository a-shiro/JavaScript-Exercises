function solve(array) {
    let vipList = [];
    let regularsList = [];

    let element = array.shift();

    while (element !== 'PARTY') {
        let isVip = isNaN(element[0]);

        switch (true) {
            case isVip:
                vipList.push(element);
                break;
            case !isVip:
                regularsList.push(element);
                break;
        }

        element = array.shift();
    }

    let resultArray = regularsList.concat(vipList);

    for (let guest of array){
        resultArray.splice(resultArray.indexOf(guest), 1);
    }

    console.log(resultArray.length);
    resultArray.forEach(guest => console.log(guest));
}

solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
