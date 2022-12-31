const key = "289b1a286cff4b56432e314769ff8d69";
let currentCity = "";

const throwErrors = (response) => {
    if(!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

const getCurrentWeather = () => {
    let searchedCity = $('#city-input').val();
    currentCity= $('#search-city').val();
    const units = "imperial";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=${units}&appid=${key}`

    fetch(apiURL)
        .then(throwErrors)
        .then((response) => {
            return response.json();
        })
        // Current Weather conditions
        .then((response) => {
            // let currentIcon = `http://openweathermap.org/img/wn/10d@2x.png`
            var currentDate = dayjs().format('MM/DD/YYYY');

            let currentHTML = `
            <div id="current-weather" class="col border-2">
                    <h2> Today's Forecast:</h2>
                    <h3><span id="city-name">${response.name} </span><span id="current-day">${currentDate}</span><img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></h3>
                    <p><span id="current-temp">Temperature: ${response.main.temp} °F</span></p>
                    <p><span id="current-hum">Humidity: ${response.main.humidity}%</span></p>
                    <p><span id="current-wind">Wind Speed: ${response.wind.speed} mph</span></p>
            </div>
            `;

        $('#current-weather').html(currentHTML);
        console.log(response.weather.icon);
        })
}

// const getFiveDayForecast = (event) => {
//     let forecastAPIURL = `api.openweathermap.org/data/2.5/forecast?${cityName}&units=${units}&appid=${key}`;

//     fetch (forecastAPIURL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         let fiveDayForecastHTML = ``
//     })

// }



        // TODO append name of searched city as button

        
        


        // TODO load 5 day forecast

// adds click listener to seach button
$('#search-button').on('click', (event) => {
    // event.preventDefault();
    currentCity=$('#city-input').val();
    getCurrentWeather(event);
});



       






