const key = "289b1a286cff4b56432e314769ff8d69";
let searchedCity = response[0];
let cityName = searchedCity.name;
let units = "imperial";

// adds click listener to seach button
$('#search-button').on('click', function(event) {
    event.preventDefault();
    let city = $('#search-city').val();

    if (city) {
        getCurrentWeather(event);
        cityInput.value = '';

    } else {
        city.textContent = '';
        alert('Please enter a city')
    }

})


const getCurrentWeather = (event) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${key}`

    fetch(apiURL)
    .then((response) => {
        return response.json();
    })
        // Current Weather conditions
    .then((response) => {

        let searchedCity = response[0];
        let currentIcon = `https://openweathermap.org/img/w/${response.weather[0]}.icon.png`

        let currentHTML = `
            <div id="current-weather" class="col">Today's Forecast
                    <h3><span id="city-name">${searchedCity.name}</span><span id="current-day">${currentMoment.format("(MM/DD/YY)")}</span><img src="${currentIcon}"></h3>
                    <p><span id="current-temp">${searchedCity.main.temp}</span></p>
                    <p><span id="current-hum">${searchedCity.main.humidity}</span></p>
                    <p><span id="current-wind">${searchedCity.wind.speed}</span></p>
            </div>
            `;

            $('#current-weather').html(currentHTML);
        
    })
}

const getFiveDayForecast = (event) => {
    let forecastAPIURL = `api.openweathermap.org/data/2.5/forecast?${cityName}&units=${units}&appid=${key}`;

    fetch (forecastAPIURL)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        let fiveDayForecastHTML = ``
    })

}



        // TODO append name of searched city as button

        
        


        // TODO load 5 day forecast



       






