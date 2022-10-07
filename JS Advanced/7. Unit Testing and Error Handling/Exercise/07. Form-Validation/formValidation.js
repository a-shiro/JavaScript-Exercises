function validate() {
    document.getElementById('submit').addEventListener('click', validate);


    let inputFields = document.getElementsByTagName('input')

    for (let field of inputFields) {
        let isValid = true

        switch (field.id) {
            case 'username':
                if (field.value.length < 3 || field.value.length > 20) {
                    isValid = false
                }

                let count = (field.value.match(/^[a-z0-9]+$/i) || []).length;

                if (count === 0) {
                    isValid = false
                }

                break;
            case 'password':

                break;
        }

        if (!isValid) {
            field.style.borderColor = 'red'
        }

    }
}
