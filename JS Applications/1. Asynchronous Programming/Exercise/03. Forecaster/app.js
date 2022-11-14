function setCurrentHtml(currentWeather, weatherSymbols) {
    const current = document.querySelector('#current');

    const currentWeatherCondition = currentWeather.forecast.condition;

    current.innerHTML =
        `<div class="label">Current conditions</div>
         <div class="forecasts">
            <span class="condition symbol">${weatherSymbols[currentWeatherCondition]}</span>
            <span class="condition">
              <span class="forecast-data">${currentWeather.name}</span>
              <span class="forecast-data">${currentWeather.forecast.low}&#176/${currentWeather.forecast.high}&#176</span>
              <span class="forecast-data">${currentWeatherCondition}</span>
            </span>  
         </div>`;
}

function setUpcomingHtml(upcomingWeather, weatherSymbols) {
    const upcoming = document.querySelector('#upcoming');

    upcoming.innerHTML = '<div class="label">Three-day forecast</div>';

    for (let day of upcomingWeather.forecast) {
        const span = document.createElement('span');
        span.classList.add('upcoming');

        const upcomingWeatherCondition = day.condition;

        span.innerHTML =
            `<div class="forecast-info">
               <span class="upcoming">
                 <span class="symbol">${weatherSymbols[upcomingWeatherCondition]}</span>
                 <span class="forecast-data">${day.low}&#176/${day.high}&#176</span>
                 <span class="forecast-data">${upcomingWeatherCondition}</span>
               </span>
            </div>`;

        upcoming.append(span);
    }
}

function displayForecastData(currentWeather, upcomingWeather) {
    const forecast = document.querySelector('#forecast');

    const weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
    }

    setCurrentHtml(currentWeather, weatherSymbols);
    setUpcomingHtml(upcomingWeather, weatherSymbols);


    forecast.style.display = 'block';
}

async function getWeatherConditions(location, url) {
    const response = await fetch(url + location.code);
    const weatherData = await response.json();

    return weatherData;
}

async function getForecastData(location) {
    const currentWeather = await getWeatherConditions(location, 'http://localhost:3030/jsonstore/forecaster/today/');
    const upcomingWeather = await getWeatherConditions(location, 'http://localhost:3030/jsonstore/forecaster/upcoming/');

    return displayForecastData(currentWeather, upcomingWeather);
}

async function getLocation() {
    const requestedLocation = document.querySelector('#location').value;

    const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
    const locationData = await response.json();

    const result = locationData.find(x => x.name == requestedLocation);

    if (result != undefined) {
        return getForecastData(result);
    }

}

function attachEvents() {
    const getWeatherBtn = document.querySelector('#submit');

    getWeatherBtn.addEventListener('click', getLocation);
}

attachEvents();