async function getInfo() {
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    const stopId = document.getElementById('stopId');

    try {
    const stopInfo = await getStopInfo(stopId.value);

    stopName.innerText = stopInfo.name;
    busesList.innerHTML = ''

    Object.entries(stopInfo.buses).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.innerText = `Bus ${key} arrives in ${value} minutes`;

        busesList.append(li);
    })

    } catch (error) {
        stopName.innerText = 'Error';
        busesList.innerHTML = '';
    }
}

async function getStopInfo(id) {
    const response = await fetch('http://localhost:3030/jsonstore/bus/businfo/' + id);

    if (response.statusText == 'No Content') {
        throw new Error();
    }

    const data = await response.json();

    return data;
}