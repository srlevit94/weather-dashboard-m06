const key = "289b1a286cff4b56432e314769ff8d69";
let currentCity = "";

// catches errors
const throwErrors = (response) => {
    if(!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

// function to fetch current weather
const getCurrentWeather = () => {
    let searchedCity = $('#city-input').val();
    currentCity= $('#city-input').val();
    const units = "imperial";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=${units}&appid=${key}`

    //calls API
    fetch(apiURL)
        .then(throwErrors)
        .then((response) => {
            return response.json();
        })
        // Current Weather conditions
        .then((response) => {
            // let currentIcon = `http://openweathermap.org/img/wn/10d@2x.png`
            var currentDate = dayjs().format('MM/DD/YYYY');
            //fills in HTML based on API response
            let currentHTML = `
            <div id="current-weather" class="col">
                    <h2> Today's Forecast:</h2>
                    <h3><span id="city-name">${response.name} </span><span id="current-day">${currentDate}</span><img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></h3>
                    <p><span id="current-temp">Temperature: ${response.main.temp} °F</span></p>
                    <p><span id="current-hum">Humidity: ${response.main.humidity}%</span></p>
                    <p><span id="current-wind">Wind Speed: ${response.wind.speed} mph</span></p>
            </div>
            `;
        getFiveDayForecast(event);
        // adds HTML based on id
        $('#current-weather').html(currentHTML);
        })
}

// function to get five-day forecast
const getFiveDayForecast = (event) => {
    let searchedCity = $('#city-input').val();
    const units = "imperial";
    let forecastAPIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&units=${units}&appid=${key}`;

    fetch (forecastAPIURL)
    .then((response) => {
        return response.json();
        console.log(response.json);
    })
    .then((response) => {
        
        fiveDayHTML = `
            <div id="five-day-forecast" class="col justify-content-between">
                <h2>Five-Day Forecast:</h2>
            `;
        // loop to get values for each day
        

        for (let i = 0; i < 5; i++) {
            let fiveDays = dayjs().add([i], 'day').format('MM/DD/YYYY')
            console.log(fiveDays);
            let fiveDayCall = response.list[i];
            let fiveDayIcon = `http://openweathermap.org/img/wn/${fiveDayCall.weather[0].icon}@2x.png`


            fiveDayHTML += `
                <div id="daily-forecast-card" class="row mt-5">
                    <h3 class="five-day-date">${fiveDays} <img src="${fiveDayIcon}" alt="weather"></h3>
                    <p>Temp: <span id="five-day-temp">${fiveDayCall.main.temp} °F</span></p>
                    <p>Humidity: <span id="five-day-hum">${fiveDayCall.main.humidity}%</span></p>
                    <p>Wind Speed: <span id="five-day-wind">${fiveDayCall.wind.speed} mph</span></p>
                </div>
            `;
            fiveDayHTML += `</div>`
            console.log(fiveDays[i]);
            $('#five-day-forecast').html(fiveDayHTML);
        }
    })

}



        // TODO append name of searched city as button

        
        


        // TODO load 5 day forecast

// adds click listener to seach button
$('#search-button').on('click', (event) => {
    // event.preventDefault();
    currentCity=$('#city-input').val();
    getCurrentWeather(event);
});



       






