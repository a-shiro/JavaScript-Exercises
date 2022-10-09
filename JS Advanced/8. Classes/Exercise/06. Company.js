// Judge requires Employee class inside addEmployee method
class Employee {
    constructor(name, salary, position) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}

class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!')
        }

        if (!this.departments[department])
            this.departments[department] = [];
        this.departments[department].push(new Employee(name, salary, position))

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartment = 'N/A';
        let bestAverageSalary = 0;

        for (let key of Object.keys(this.departments)) {
            let averageSalary = this.averageSalaryOfDepartment(this.departments[key])

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = key;
            }
        }

        let result = `Best Department is: ${bestDepartment}\n`
        result += `Average salary: ${bestAverageSalary.toFixed(2)}\n`

        let employees = this.departments[bestDepartment].sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => b.salary - a.salary);

        employees.forEach(employee => result += `${employee.name} ${employee.salary} ${employee.position}\n`)

        return result.trim();
    }

    averageSalaryOfDepartment(employees) {
        let total = employees.reduce((total, employee) => total + employee.salary, 0)

        return total / employees.length
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());