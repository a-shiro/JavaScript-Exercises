function solve(input) {
    let array = input.split(' ')
    let objectsArr = [];

    for (let element of array) {
        element = element.toLowerCase()

        let object = objectsArr.find(object => object.element === element);

        if (object) {
            object.timesSeen++;
            continue;
        }

        let timesSeen = 1;
        objectsArr.push({element, timesSeen});
    }

    let result = '';

    objectsArr.forEach(object => {
            if (object.timesSeen % 2 !== 0) {
                result += `${object.element} `;
            }
        }
    );

    console.log(result);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
