function solve(string, startCut, delCount) {
    let result = string.split('').splice(startCut, delCount).join('');
    console.log(result);
}

solve('ASentence', 1, 8);