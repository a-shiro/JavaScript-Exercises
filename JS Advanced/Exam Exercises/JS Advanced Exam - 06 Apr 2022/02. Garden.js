class Garden {
    constructor(spaceAvailable) {
        this.spaceAvaliable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvaliable - spaceRequired < 0) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })

        this.spaceAvaliable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(object => object.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }

        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(object => object.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.storage.push({
            plantName,
            quantity: plant.quantity
        })

        this.spaceAvaliable += plant.spaceRequired;

        this.plants.splice(this.plants.indexOf(plant), 1);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = `The garden has ${this.spaceAvaliable} free space left.\n`;

        let plantsInGarden = [];

        for (let plant of this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))) {
            plantsInGarden.push(plant.plantName);
        }

        report += `Plants in the garden: ${plantsInGarden.join(', ')}\n`;

        let plantsInStorage = [];

        for (let plant of this.storage) {
            plantsInStorage.push(`${plant.plantName} (${plant.quantity})`);
        }

        if (plantsInStorage.length === 0) {
            report += `Plants in storage: The storage is empty.`;
        } else {
            report += `Plants in storage: ${plantsInStorage.join(', ')}`;
        }

        return report;
    }
}


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.ripenPlant('apple', -10));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
