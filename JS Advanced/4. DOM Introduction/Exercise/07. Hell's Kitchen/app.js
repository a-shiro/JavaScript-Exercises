function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let bestRestaurant = {
            'name': 'N/A',
            'bestSalary': 0,
            'averageSalary': 0,
            'workers': 'N/A'
        };

        let restaurantsStr = document.querySelector('div textarea').value;
        let restaurantsArray = JSON.parse(restaurantsStr);

        for (let restaurant of restaurantsArray) {
            let [name, workers] = restaurant.split(' - ');
            workers = workers.split(', ');

            if (bestRestaurant.name === name) {
                bestRestaurant.workers.push(...workers);

                bestRestaurant.bestSalary = getBestSalary(bestRestaurant.workers);
                bestRestaurant.averageSalary = getAverageSalary(bestRestaurant.workers);
                continue;
            }

            let averageSalary = getAverageSalary(workers);

            if (averageSalary > bestRestaurant.averageSalary) {
                bestRestaurant.name = name;
                bestRestaurant.bestSalary = getBestSalary(workers);
                bestRestaurant.averageSalary = averageSalary;
                bestRestaurant.workers = workers;
            }
        }

        document.getElementById('bestRestaurant').querySelector('p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

        let sortedWorkers = sortWorkers(bestRestaurant.workers);

        sortedWorkers.forEach(worker => document.getElementById('workers')
            .querySelector('p').textContent += `Name: ${worker.workerName} With Salary: ${worker.salary} `);
    }

    function getAverageSalary(workers) {
        let sum = 0;

        for (let worker of workers) {
            let salary = Number(worker.split(' ')[1]);
            sum += salary;
        }

        return sum / workers.length;
    }

    function getBestSalary(workers) {
        let best = 0;

        for (let worker of workers) {
            let salary = Number(worker.split(' ')[1]);

            if (salary > best) {
                best = salary
            }
        }

        return best;
    }

    function sortWorkers(workers) {
        let result = [];

        for (let worker of workers) {
            let [workerName, salary] = worker.split(' ');
            result.push({workerName, salary});
        }

        return result.sort((a, b) => b.salary - a.salary);
    }
}