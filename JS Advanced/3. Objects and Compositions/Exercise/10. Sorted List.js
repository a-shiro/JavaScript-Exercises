function createSortedList() {
    const collection = [];

    return {
        add,
        remove,
        get,
        size: 0,
    }

    function add(element) {
        collection.push(element);
        this.size++;
        collection.sort((a, b) => a - b);
    };

    function remove(index) {
        const valid = checkIndex(index);

        if (valid) {
            collection.splice(index, 1);
            this.size--;
            return;
        }

        throw new Error('Invalid index!')
    };

    function get(index) {
        const valid = checkIndex(index);

        if (valid) {
            return collection[index];
        }

        throw new Error('Invalid index!')
    };

    function checkIndex(index) {
        return index < collection.length && index >= 0;
    }
}


let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));

list.remove(0);

console.log(list.get(1));

console.log(list.size)
