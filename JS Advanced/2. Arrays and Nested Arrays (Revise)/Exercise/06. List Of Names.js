function solve(names) {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach(name => console.log(`${names.indexOf(name) + 1}.${name}`));
}

solve(["John", "Bob", "Christina", "Ema"]);