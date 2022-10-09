class List {
    list = [];
    size = 0

    add(element) {
        this.list.push(element);
        this.size++;

        this.list.sort((a, b) => a - b)
    }

    remove(idx) {
        if (idx < 0 || idx >= this.size) {
            throw new Error(`Index out of range!`)
        }

        this.list.splice(idx, 1);
        this.size--;
    }

    get(idx) {
        if (idx < 0 || idx >= this.size) {
            throw new Error(`Index out of range!`)
        }

        return this.list[idx];
    }
}

let list = new List();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));

