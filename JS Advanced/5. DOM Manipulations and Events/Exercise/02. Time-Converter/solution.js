function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for (let button of buttons) {
        button.addEventListener('click', convertValues);
    }

    function convertValues(event) {
        let daysField = document.getElementById('days');
        let hoursField = document.getElementById('hours');
        let minutesField = document.getElementById('minutes');
        let secondsField = document.getElementById('seconds');

        let type = event.target.id;

        switch (type) {
            case 'daysBtn':
                daysField = Number(daysField.value);

                hoursField.value = daysField * 24;
                minutesField.value = hoursField.value * 60;
                secondsField.value = minutesField.value * 60
                break;
            case 'hoursBtn':
                hoursField = Number(hoursField.value);

                daysField.value = hoursField / 24;
                minutesField.value = hoursField * 60;
                secondsField.value = minutesField.value * 60
                break;
            case 'minutesBtn':
                minutesField = Number(minutesField.value);

                secondsField.value = minutesField * 60
                hoursField.value = minutesField / 60;
                daysField.value = hoursField.value / 24;
                break;
            case 'secondsBtn':
                secondsField = Number(secondsField.value);

                minutesField.value = secondsField / 60
                hoursField.value = minutesField.value / 60;
                daysField.value = hoursField.value / 24;
                break;
        }
    }
}