function palindrome(array) {
    for (let i = 0; i < array.length; i++) {
        let numberToStr = String(array[i]);
        let numberToStrReversed = numberToStr.split('').reverse().join('');

        if (numberToStr === numberToStrReversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindrome([123, 323, 421, 121]);