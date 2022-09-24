function solve(text, targetWord) {
    let count = text.split(' ').filter(word => word === targetWord).length;
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');