function solve(a, b) {
    function GetDivisor(a, b) {
        if (b > a) {
            let temp = a;
            a = b;
            b = temp;
        }
        while (true) {
            if (b === 0) return a;
            a %= b;
            if (a === 0) return b;
            b %= a;

        }
    }

    let divisor = GetDivisor(a, b);

    console.log(divisor);
}

solve(15, 5);
solve(2154, 458);