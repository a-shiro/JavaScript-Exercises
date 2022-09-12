function solve(firstStr, char, secondStr) {
    firstStr = firstStr.replace('_', char);
    console.log(firstStr === secondStr ? 'Matched' : 'Not Matched');
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');