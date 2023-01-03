function solve() {
    function checkBoard() {
        const incorrect = '2px solid red';
        const correct = '2px solid green'
        row = '';

        for (const field of fields) {
            if (row.length === 3) {
                row = '';
            }

            if (field.value === '') {
                table.style.border = incorrect;
                result.style.color = 'red';
                result.textContent = 'Please fill all the fields!';
                return;
            }

            if (Number(field.value) > 3 || Number(field.value) < 1) {
                table.style.border = incorrect;
                result.style.color = 'red';
                result.textContent = 'Numbers must be between 1 and 3!';
                return;
            }

            if (row.includes(field.value)) {
                table.style.border = incorrect;
                result.style.color = 'red';
                result.textContent = 'NOP! You are not done yet...';
                return;
            }

            row += field.value;
        }

        table.style.border = correct;
        result.style.color = 'green';
        result.textContent = 'You solve it! Congratulations!';
    }

    const fields = Array.from(document.querySelectorAll('input'));
    const table = document.querySelector('table');
    const result = document.querySelector('p');

    document.querySelectorAll('button')[0].addEventListener('click', checkBoard)
    document.querySelectorAll('button')[1].addEventListener('click', () => {
        fields.forEach(field => field.value = '');
        table.style.border = 'none';
        result.textContent = ''
    })
}