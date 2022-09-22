function solve(input) {
    let meetingsArray = [];

    for (let element of input) {
        let [day, name] = element.split(' ');

        let object = meetingsArray.find(weekday => weekday.day === day);

        if (object) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetingsArray.push({day, name});
        console.log(`Scheduled for ${day}`);
    }

    meetingsArray.forEach(object => console.log(`${object.day} -> ${object.name}`));
}

solve([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);