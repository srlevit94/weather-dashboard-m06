# weather-dashboard-m06
Search a city name, and get the 5-day weather forecast


## Acceptance Criteria

GIVEN a weather dashboard with form inputs  

WHEN I search for a city  
THEN I am presented with current and future conditions for that city and that city is added to the search history  

WHEN I view current weather conditions for that city  
THEN I am presented with the **city name, **the date, an **icon representation of weather conditions, the **temperature, **the humidity, and the **wind speed  

WHEN I view future weather conditions for that city  
THEN I am presented with a 5-day forecast that displays the **date, an **icon representation of weather conditions, **the temperature, **the wind speed, and **the humidity  

WHEN I click on a city in the **search history  
THEN I am again presented with **current and future conditions for that city  

## API Call by city Example
{
     "coord": {
       "lon": -0.13,
       "lat": 51.51
     },
     "weather": [
       {
         "id": 300,
         "main": "Drizzle",
         "description": "light intensity drizzle",
 ##        "icon": "09d"
       }
     ],
     "base": "stations",
     "main": {
##       "temp": 280.32,
       "pressure": 1012,
 ##      "humidity": 81,
       "temp_min": 279.15,
       "temp_max": 281.15
     },
     "visibility": 10000,
     "wind": {
 ##      "speed": 4.1,
       "deg": 80
     },
     "clouds": {
       "all": 90
     },
     "dt": 1485789600,
     "sys": {
       "type": 1,
       "id": 5091,
       "message": 0.0103,
       "country": "GB",
       "sunrise": 1485762037,
       "sunset": 1485794875
     },
     "id": 2643743,
##     "name": "London",
     "cod": 200
     }