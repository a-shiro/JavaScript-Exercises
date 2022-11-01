function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.currentTask = 0
        };

        work(tasks) {
            console.log(tasks[this.currentTask]);

            this.currentTask += 1;

            if (this.currentTask === tasks.length) {
                this.currentTask = 0;
            }
        };

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        };
    }

    class Junior extends Employee {
        constructor(name, age, salary) {
            super(name, age, salary);
            this.tasks = [`${this.name} is working on a simple task.`];
        }

        work() {
            super.work(this.tasks);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,
            ];
        }

        work() {
            super.work(this.tasks);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
            this.dividend = 0
        }

        work() {
            super.work(this.tasks);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        };
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}


const classes = solve();

const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();

console.log()

const senior = new classes.Senior('Alex', 31);
senior.work();
senior.work();
senior.work();
senior.work();
senior.salary = 12050;
senior.collectSalary();

console.log()

const manager = new classes.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();