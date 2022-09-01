function readWhileStop(input) {
    let i = 0;
    let word = input[i];

    while (word !== 'Stop') {
        console.log(word);

        i += 1;
        word = input[i];
    }
}

readWhileStop([
    "Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"
]);
readWhileStop([
    "Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"
]);