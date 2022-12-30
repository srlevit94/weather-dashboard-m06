let cityInput = document.getElementById("city-input");
let searchBtn = document.getElementById('search-new-city');
let currentCityName = document.getElementById('current-city');

document.getElementById("search-city");
document.addEventListener('click', fetchWeather);;

$('#search-button').on('click', function(event) {
    event.preventDefault();
    let city = $('#search-city').val();

    if (city) {
        fetchWeather(city);
        cityInput.value = '';

    } else {
        currentCityName.textContent = '';
        alert('Please enter a city')
    }

})


function fetchWeather() {
    
    let cityName = "Houston"
    let key = "289b1a286cff4b56432e314769ff8d69";
    let units = "imperial";
    const GeoCodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&units=${units}&appid=${key}`

     fetch(GeoCodeUrl)
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            let searchedCity = response[0];
            let cityName = searchedCity.name;
            let lat = searchedCity.lat;
            let lon = searchedCity.lon;

            const OpenWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

            // append name of searched city as button

            fetch(OpenWeatherURL)
                .then(function (cityName) {
                    return response.json();
                })

        // load current weather


        // load 5 day forecast



        })
       
}






