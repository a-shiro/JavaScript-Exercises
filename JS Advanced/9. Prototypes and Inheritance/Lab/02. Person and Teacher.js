function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    };
}

let classCreator = personAndTeacher();

let person = new classCreator.Person('George', 'george1@gmail.com');
let teacher = new classCreator.Teacher('George', 'george1@gmail.com', 'Math');

console.log(person);
console.log(teacher);