function createObject(library, orders) {
    let result = [];

    for (let order of orders) {
        let object = {};
        Object.assign(object, order.template);

        let functionality = order.parts;

        for (let action of functionality) {
            object[action] = library[action];
        }

        result.push(object);
    }
    
    return result;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: {name: 'ACME Printer'},
        parts: ['print']
    },

    {
        template: {name: 'Initech Scanner'},
        parts: ['scan']
    },

    {
        template: {name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },

    {
        template: {name: 'BoomBox Stereo'},
        parts: ['play']
    }
];

console.log(createObject(library, orders));