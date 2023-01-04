function validate() {
    function getValidator() {
        return {
            username: () => {
                const field = document.querySelector('#username');
                const fieldValue = field.value;
                let status = 'ok';

                if (fieldValue.length < 3 || fieldValue.length > 20) {
                    field.style.border = '2px red solid';
                    status = 'bad';
                }

                fieldValue.split('').every(element => {
                    if (element.toLowerCase() != element.toUpperCase()) {
                        return true;
                    }

                    if (!isNaN(element)) {
                        return true;
                    }

                    field.style.border = '2px red solid';
                    status = 'bad'
                    return false;
                })

                return status;
            },
            password: () => {
                const field = document.querySelector('#password');
                const fieldValue = field.value;
                let status = 'ok';

                if (fieldValue.length < 5 || fieldValue.length > 15) {
                    field.style.border = '2px red solid';
                    status = 'bad;'
                }

                fieldValue.split('').every(element => {
                    if (element.toLowerCase() != element.toUpperCase()) {
                        return true;
                    }

                    if (!isNaN(element)) {
                        return true;
                    }

                    if (element === '_') {
                        return true;
                    }

                    field.style.border = '2px red solid';
                    status = 'bad'
                    return false;
                })

                return status;
            },
            confirmPassword: () => {
                const field1 = document.querySelector('#password');
                const field2 = document.querySelector('#confirm-password');
                let status = 'ok';

                if (field1.value !== field2.value) {
                    field2.style.border = '2px red solid';
                    status = 'bad';
                }

                return status;
            },
            email: () => {
                const field = document.querySelector('#email');
                const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                let status = 'ok';

                if (!field.value.match(regex)) {
                    field.style.border = '2px red solid';
                    status = 'bad'
                };

                return status;
            },
            companyNumber: () => {
                let status = 'ok';
                if (companyCheckbox.checked) {
                    const field = document.querySelector('#companyNumber');

                    if (field.value < 1000 || field.value > 9999) {
                        field.style.border = '2px red solid';
                        status = 'bad'
                    }
                }
                return status;
            }
        }
    }

    function validateFields(event) {
        event.preventDefault();

        const validatorObject = getValidator();
        let validationSucceeded = true;

        Array.from(document.querySelectorAll('input')).forEach(input => { input.style.border = 'none'; });

        for (const validator of Object.keys(validatorObject)) {
            let status = validatorObject[validator]();

            if (status === 'bad') {
                validationSucceeded = false;
            }
        }

        if (validationSucceeded) {
            document.querySelector('#valid').style.display = 'block';
        }
    }

    document.querySelector('#registerForm').addEventListener('submit', validateFields);
    const companyCheckbox = document.querySelector('#company')
    companyCheckbox.addEventListener('change', () => {
        if (companyCheckbox.checked) {
            document.querySelector('#companyInfo').style.display = 'block';
        } else {
            document.querySelector('#companyInfo').style.display = 'none';
        }
    })
}