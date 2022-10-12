function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

function Person (name) {
    this.name = name;

    this.toString = function () {
        return `My name is ${this.name}.`
    }
}

extendPrototype(Person);

let person = new Person('George');

console.log(Person.prototype);
console.log(person.species);
console.log(person.toSpeciesString());


