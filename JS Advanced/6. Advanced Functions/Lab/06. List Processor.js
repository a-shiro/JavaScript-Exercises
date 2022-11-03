function listProcessor (list) {
    let resultList = [];

    list.forEach(input => {
        let [command, str] = input.split(' ');

        switch (command) {
            case 'add':
                resultList.push(str);
                break;
            case 'remove':
                resultList = resultList.filter(element => element !== str);
                break;
            case 'print':
                console.log(resultList.join(','));
                break;
        }
    })
}

// function listProcessor(input) {
//     let resultList = [];
//
//     let commands = {
//         add: (str) => resultList.push(str),
//         remove: (str) => resultList = resultList.filter((e) => e !== str),
//         print: () => console.log(resultList.join(',')),
//     };
//
//     for (const line of input) {
//         let [command, value] = line.split(' ');
//         commands[command](value);
//     }
// }

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])