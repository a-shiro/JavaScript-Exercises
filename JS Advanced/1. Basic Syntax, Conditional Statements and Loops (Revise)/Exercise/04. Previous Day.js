function solve(year, month, day){
    let date = new Date(year, month - 1, day -1);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
console.log(solve(2016, 9, 30));