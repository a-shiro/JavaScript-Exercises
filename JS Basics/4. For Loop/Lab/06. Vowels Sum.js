function calcVowelsValue(input) {
    let aLetterValue = 1;
    let eLetterValue = 2;
    let iLetterValue = 3;
    let oLetterValue = 4;
    let uLetterValue = 5;

    let word = input[0];

    let result = 0;

    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case 'a':
                result += aLetterValue;
                break;
            case 'e':
                result += eLetterValue;
                break;
            case 'i':
                result += iLetterValue;
                break;
            case 'o':
                result += oLetterValue;
                break;
            case 'u':
                result += uLetterValue;
                break;
        }
    }
    console.log(result);
}

calcVowelsValue(['hello'])
calcVowelsValue(['bamboo'])