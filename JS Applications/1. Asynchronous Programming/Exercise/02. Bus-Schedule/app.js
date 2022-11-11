async function getNextStopInfo(id) {
    const response = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + id);

    return await response.json();
}

function solve() {
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    const infoScreen = document.querySelector('.info');

    const scheduleBoard = {
        nextStop: 'depot'
    }

    async function depart() {
        const stopInfo = await getNextStopInfo(scheduleBoard.nextStop);

        infoScreen.textContent = `Next stop ${stopInfo.name}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        const stopInfo = await getNextStopInfo(scheduleBoard.nextStop);

        infoScreen.textContent = `Arriving at ${stopInfo.name}`;

        scheduleBoard.nextStop = stopInfo.next;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();