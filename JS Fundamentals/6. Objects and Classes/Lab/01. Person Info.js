function getPersonInfo(firstName, lastName, age) {
    return {firstName, lastName, age};
}


let person = getPersonInfo(
    "Peter",
    "Pan",
    "20"
);

console.log(person.firstName);
console.log(person.age);
