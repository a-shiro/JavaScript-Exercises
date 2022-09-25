function solve(text) {
    let firstHalf = text.slice(0, text.length / 2);
    let secondHalf = text.slice(text.length / 2);

    return `${firstHalf.split('').reverse().join('')}\n${secondHalf.split('').reverse().join('')}`;
}

console.log(solve('tluciffiDsIsihTgnizamAoSsIsihT'));