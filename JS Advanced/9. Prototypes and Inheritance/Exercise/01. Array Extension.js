let myArray = [1, 2, 3];

Array.prototype.last = function () {
    return this[this.length - 1];
}

// console.log(myArray.last());

Array.prototype.skip = function (idx) {
    if (typeof idx !== 'number') {
        throw new Error('Given parameter is not of type Int!');
    }

    if (idx > this.length || idx < 0) {
        throw new Error('Index out of range');
    }

    return [...this].splice(idx);
}

// console.log(myArray.skip(1));

Array.prototype.take = function (idx) {
    if (typeof idx !== 'number') {
        throw new Error('Given parameter is not of type Int!');
    }

    if (idx > this.length || idx < 0) {
        throw new Error('Index out of range');
    }

    return [...this].splice(0, idx);
}

// console.log(myArray.take(2));

Array.prototype.sum = function () {
    return this.reduce((total, n) => total + n, 0);
}

// console.log(myArray.sum());

Array.prototype.average = function () {
    return this.sum() / this.length;
}

// console.log(myArray.average());
