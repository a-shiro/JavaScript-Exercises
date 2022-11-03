// function getCommandProcessor() {
//     class CommandProcessor {
//         constructor() {
//             this.internalStr = '';
//         }
//
//         append (str) {
//             this.internalStr += str;
//         }
//
//         removeStart(removeCount) {
//             this.internalStr = this.internalStr.substring(removeCount);
//         }
//
//         removeEnd(removeCount) {
//             this.internalStr = this.internalStr.slice(0, -removeCount);
//         }
//
//         print() {
//             console.log(this.internalStr);
//         }
//     }
//
//     return new CommandProcessor;
// }

function getCommandProcessor() {
    let internalStr = '';

    return {
        append: (str) => internalStr += str,
        removeStart: (n) => internalStr = internalStr.slice(n),
        removeEnd: (n) => internalStr = internalStr.slice(0, -n),
        print: () => console.log(internalStr),
    };
}

let firstZeroTest = getCommandProcessor()

firstZeroTest.append('hello');
firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();

let secondZeroTest = getCommandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();