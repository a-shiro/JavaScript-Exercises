function extensibleObject() {
    return {
        extend: function (object) {
            for (let [key, value] of Object.entries(object)) {
                if (typeof value === 'function') {
                    this.__proto__[key] = value
                    continue;
                }

                this[key] = value;
            }
        }
    }
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'

}

myObj.extend(template);

// Expect:
// myObj: {
//     __proto__: {
//         extensionMethod: function () {}
//     },
//     extend: function () {},
//     extensionProperty: 'someString'
// }