const key = "289b1a286cff4b56432e314769ff8d69";
let currentCity = "";
const searchedCitiesList = document.querySelector('#city-button-list');

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
            saveSearchedCity(searchedCity);
            var currentDate = dayjs().format('ddd, MMMM D');
            //fills in HTML based on API response
            let currentHTML = `
            <div id="" class="col p-3">
                    <h2>Current Weather in ${response.name} - ${currentDate} <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></h2>
                    <p><span id="current-temp">Temperature: ${response.main.temp} °F</span></p>
                    <p><span id="current-hum">Humidity: ${response.main.humidity}%</span></p>
                    <p><span id="current-wind">Wind: ${response.wind.speed} mph</span></p>
            </div>
            `;
        getFiveDayForecast();
        // adds HTML based on id
        $('#current-weather').html(currentHTML);
        })
}

// function to get five-day forecast
const getFiveDayForecast = () => {
    let searchedCity = $('#city-input').val();
    const units = "imperial";
    let forecastAPIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&units=${units}&appid=${key}`;

    fetch (forecastAPIURL)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        
        fiveDayHTML = `
        <h2 class="p-2">  Five-Day Forecast:</h2>
        <div id="" class="col d-inline-flex flex-wrap">
        `;

        // loop to get values for each day
        for (let i = 0; i < 5; i++) {
            let fiveDays = dayjs().add([i], 'day').format('ddd, MMM D')
            console.log(fiveDays);
            let fiveDayCall = response.list[i];
            let fiveDayIcon = `http://openweathermap.org/img/wn/${fiveDayCall.weather[0].icon}@2x.png`

            fiveDayHTML += `
                
                    <div id="daily-forecast-card"class="card vw-10 p-3 m-2 text-light">
                        <h3 class="text-center">${fiveDays} <img src="${fiveDayIcon}" alt="weather"></h3>
                        <p>Temp: <span id="five-day-temp">${fiveDayCall.main.temp} °F</span></p>
                        <p>Humidity: <span id="five-day-hum">${fiveDayCall.main.humidity}%</span></p>
                        <p>Wind: <span id="five-day-wind">${fiveDayCall.wind.speed} mph</span></p>
                    </div>
            `;
            
            $('#five-day-forecast').html(fiveDayHTML);
        }
        fiveDayHTML += `</div>`
    })

}
// TODO save and append name of searched city as button

const saveSearchedCity = (searchedCity) => {
    const searchedCitiesLs = JSON.parse(localStorage.getItem('cities')) || [];
    if(searchedCitiesLs.findIndex(el => el == searchedCity) != -1) return;
    searchedCitiesLs.push(searchedCity);
    localStorage.setItem('cities', JSON.stringify(searchedCitiesLs));
    renderSearchedCities();
}

const renderSearchedCities = () => {
    const searchedCitiesLs = JSON.parse(localStorage.getItem('cities')) || [];
    searchedCitiesList.innerHTML = '';
    searchedCitiesLs.forEach(function(item){
        const li = document.createElement('li');
        li.className = 'btn btn-secondary w-100 mt-2';
        li.innerText = item;
        searchedCitiesList.prepend(li);
        li.addEventListener('click', (event) => {
            $('#search-city').val(event.target.textContent);
            currentCity=$('#search-city').val();
            getCurrentConditions(event);
        });
      });

}

// adds click listener to search button
$('#search-button').on('click', (event) => {
    currentCity=$('#city-input').val();
    getCurrentWeather(event);
});

renderSearchedCities();

// adds click listener to previous searched city buttons
// $('#city-button-list').on('click', (event) => {
//     //event.preventDefault();
//     $('#city-input').val(event.target.textContent);
//     currentCity=$('#city-input').val();
//     getCurrentWeather(event);
// });

// const saveSearchedCity = (cityInput) => {
//     let cityExists = false;
//     for (let i = 0; i < 10; i++) {
//         if (localStorage["cities" + i] === cityInput) {
//             cityExists = true;
//             break;
//         }
//         if (cityExists === false) {
//             localStorage.setItem('cities' + localStorage.length, cityInput);
//         }
//     }
// }



       






