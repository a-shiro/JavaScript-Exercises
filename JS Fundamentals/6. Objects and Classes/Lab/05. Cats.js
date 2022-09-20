function createCat(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let element of input) {
        let [name, age] = element.split(' ');

        let cat = new Cat(name, age);
        cat.meow();
    }

}

createCat(['Mellow 2', 'Tom 5']);