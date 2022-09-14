function solve(str1, str2) {
    let start = str1.charCodeAt(0) < str2.charCodeAt(0) ? str1.charCodeAt(0) : str2.charCodeAt(0);
    let end = str1.charCodeAt(0) > str2.charCodeAt(0) ? str1.charCodeAt(0) : str2.charCodeAt(0);

    let result = '';

    for (let i = start + 1; i < end; i++) {
        result += `${String.fromCharCode(i)} `;
    }
    console.log(result);
}

solve('a', 'd');
solve('C', '#');