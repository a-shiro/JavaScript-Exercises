function convertToObj(jsonStr) {
    let object = JSON.parse(jsonStr);

    Object.keys(object).forEach(key => console.log(`${key}: ${object[key]}`));
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');