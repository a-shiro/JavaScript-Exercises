function Person(firstName, lastName) {
    const result = {
        firstName,
        lastName,
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            let fullName = value.split(' ');
            this.firstName = fullName[0];
            this.lastName = fullName[1];
        },
    });

    return result;
}

let person = new Person('Peter', 'Ivanov');
console.log(person.fullName);

person.firstName = 'George';
console.log(person.fullName);

person.lastName = 'Peterson';
console.log(person.fullName);

person.fullName = 'Nikola Tesla';
console.log(person.firstName);
console.log(person.lastName);