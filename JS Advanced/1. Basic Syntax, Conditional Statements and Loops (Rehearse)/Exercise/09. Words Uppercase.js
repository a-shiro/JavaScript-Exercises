function solve(someString){
    let pattern = /\w+/g;
    let match = someString.match(pattern);

    for(let el in match){
        match[el] = match[el].toUpperCase();
    }

    return match.join(", ")
}

console.log(solve('Hi, how are you?'));