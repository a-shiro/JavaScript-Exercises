class Storage {
    constructor(capacity) {
        this.capacity = capacity;
    }

    storage = [];
    totalCost = 0;

    addProduct(object) {
        if (this.capacity - object.quantity >=0 ) {
            this.capacity -= object.quantity;
            this.totalCost += object.quantity * object.price
            this.storage.push(object);
        }
    };

    getProducts() {
        let jsonOutputs = [];

        for (let item of this.storage) {
            jsonOutputs.push(JSON.stringify(item))
        }

        return jsonOutputs.join('\n');
    };
}

let productOne = {
    name: 'Cucumber',
    price: 1.50,
    quantity: 15
};

let productTwo = {
    name: 'Tomato',
    price: 0.90,
    quantity: 25
};

let productThree = {
    name: 'Bread',
    price: 1.10,
    quantity: 8
};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

