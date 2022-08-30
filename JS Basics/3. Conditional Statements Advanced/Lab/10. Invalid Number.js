function checkIfValid(input) {
    let n = Number(input[0])

    if (100 > n || n > 200) {
        if (n !== 0) {
            console.log('invalid')
        }
    }
}

checkIfValid(['75']);
checkIfValid(['150']);
checkIfValid(['220']);
checkIfValid(['199']);
checkIfValid(['-1']);
checkIfValid(['0']);