function companyUsers(array){
    function register(pair){
        let [companyName, userId] = pair.split(" -> ");

        if(!companyLog[companyName]){
            companyLog[companyName] = [];
        }

        if(!companyLog[companyName].includes(userId)){
            companyLog[companyName].push(userId);
        }
    }

    let companyLog = {};

    array.forEach(pair => register(pair));

    Object.keys(companyLog).sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(key);
            companyLog[key].forEach(value => console.log(`-- ${value}`));
        });

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);