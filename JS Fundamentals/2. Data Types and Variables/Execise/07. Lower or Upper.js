function solve(letter) {
    let result = letter.toLowerCase() === letter ? 'lower-case' : 'upper-case'
    console.log(result);
}

solve('L');
solve('f');