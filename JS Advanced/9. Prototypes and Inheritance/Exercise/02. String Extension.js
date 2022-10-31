String.prototype.ensureStart = function (str) {
    if (typeof str !== 'string') {
        throw new Error('Given parameter is not of type String!');
    }

    if (str !== this.slice(0, str.length)) {
        return str + this;
    }

    return this.toString();
}

String.prototype.ensureEnd = function (str) {
    if (typeof str !== 'string') {
        throw new Error('Given parameter is not of type String!');
    }

    if (!this.endsWith(str)) {
        return this + str;
    }

    return this.toString();
}

String.prototype.isEmpty = function () {
    return this.toString() === '';
}

String.prototype.truncate = function (n) {
    if (n < 4) {
        return '.'.repeat(n);
    }
    if (this.toString().length <= n) {
        return this.toString();

    } else {
        let lastIndex = this.toString()
            .substring(0, n - 2)
            .lastIndexOf(' ');

        if (lastIndex !== -1) {
            return this.toString().substring(0, lastIndex) + '...';

        } else {
            return this.toString().substring(0, n - 3) + '...';
        }
    }
};

String.format = function (str, ...params) {
    params.forEach((key, index) => {
        str = str.replace(`{${index}}`, key);
    });
    return str;
};


let str = 'my string';

str = str.ensureStart('my');
str = str.ensureStart('hello ');

str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)

str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');
