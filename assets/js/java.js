function loadCities() {


}



// receiving user input, appending to title, calling apiFetch()

function cityInputFunc(event) {
    event.preventDefault();
    // accepting user input, removing white space, set to variable
    const cityInput = document.querySelector('#city-input').value.trim();
    // adding input to the Selected city span
    document.getElementById('city-output').textContent = cityInput;
    apiFetch(cityInput);
}

function apiFetch(city) {
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // api key : a3daa86f12fe3680bfa21c25ee469546
    // obtained this code at url: https://openweathermap.org/forecast5
    // example call: api.openweathermap.org/data/2.5/forecast?q={city name}&units=imperial&appid={API key}
    let cityInput = city
    const apiKey = 'a3daa86f12fe3680bfa21c25ee469546';
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&appid=${apiKey}`;

    fetch(requestUrl)
        .then(response => {
            // if response isn't okay throw an error
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        //if previous .then is successful, run this
        .then(data => {
            // Data is an object from the api
            console.log('the data', data);
            // rendering no error if its working
            document.getElementById('error').textContent = 'no errors';
            renderData(data);
            saveAndRender(data);
        })
        // catch all, display error 
        .catch(error => {
            document.getElementById('error').textContent = `Error: ${error.message}`;
        });
};

function renderData(data) {
    // for loop coming soon! hopefully
    // rendering current data to page: current temp, current wind, current humidity, today's date (day0).
    let dateParts0 = data.list[0].dt_txt.split(' ');
    document.getElementById('date0').textContent = dateParts0[0];
    document.getElementById('icon0').textContent = data.list[0].weather[0].main;
    document.getElementById('curTemp').textContent = `${data.list[0].main.temp} °F`;
    document.getElementById('curWind').textContent = `${data.list[0].wind.speed} mph`;
    document.getElementById('curHumid').textContent = `${data.list[0].main.humidity} %`;

    // rendering 5 day forcast
    // list[0] to list [1] is 3 hours list [0] to list [7] 24hrs

    // day1
    let dateParts1 = data.list[7].dt_txt.split(' ');
    document.getElementById('date1').textContent = dateParts1[0];
    document.getElementById('icon1').textContent = data.list[7].weather[0].main;
    document.getElementById('temp1').textContent = `${data.list[7].main.temp} °F`;
    document.getElementById('wind1').textContent = `${data.list[7].wind.speed} mph`;
    document.getElementById('humidity1').textContent = `${data.list[7].main.humidity} %`;
    //day 2
    let dateParts2 = data.list[15].dt_txt.split(' ');
    document.getElementById('date2').textContent = dateParts2[0];
    document.getElementById('icon2').textContent = data.list[15].weather[0].main;
    document.getElementById('temp2').textContent = `${data.list[15].main.temp} °F`;
    document.getElementById('wind2').textContent = `${data.list[15].wind.speed} mph`;
    document.getElementById('humidity2').textContent = `${data.list[15].main.humidity} %`;
    //day 3
    let dateParts3 = data.list[23].dt_txt.split(' ');
    document.getElementById('date3').textContent = dateParts3[0];
    document.getElementById('icon3').textContent = data.list[23].weather[0].main;
    document.getElementById('temp3').textContent = `${data.list[23].main.temp} °F`;
    document.getElementById('wind3').textContent = `${data.list[23].wind.speed} mph`;
    document.getElementById('humidity3').textContent = `${data.list[23].main.humidity} %`;
    //day 4
    let dateParts4 = data.list[31].dt_txt.split(' ');
    document.getElementById('date4').textContent = dateParts4[0];
    document.getElementById('icon4').textContent = data.list[31].weather[0].main;
    document.getElementById('temp4').textContent = `${data.list[31].main.temp} °F`;
    document.getElementById('wind4').textContent = `${data.list[31].wind.speed} mph`;
    document.getElementById('humidity4').textContent = `${data.list[31].main.humidity} %`;
    //day 5
    let dateParts5 = data.list[39].dt_txt.split(' ');
    document.getElementById('date5').textContent = dateParts5[0];
    document.getElementById('icon5').textContent = data.list[39].weather[0].main;
    document.getElementById('temp5').textContent = `${data.list[39].main.temp} °F`;
    document.getElementById('wind5').textContent = `${data.list[39].wind.speed} mph`;
    document.getElementById('humidity5').textContent = `${data.list[39].main.humidity} %`;
    
}

function saveAndRender(data) {
    // Attempt to get past searches from localStorage
    let pastSearches = localStorage.getItem('cityList');

    // if pastSearches dne make an empty array
    if (pastSearches === null || pastSearches === undefined) {
        pastSearches = [];
        // Parse the JSON string into an array
    } else {
        pastSearches = JSON.parse(pastSearches); 
    }

    // Add the new city name to the past searches array
    const cityName = data.city.name;
    // Check if the city name is not already in the list
    if (!pastSearches.includes(cityName)) { 
        pastSearches.push(cityName); 
    }

    // saving updated array
    localStorage.setItem('cityList', JSON.stringify(pastSearches));
    
    updatePastSearchList(pastSearches);
}

// Function to update the past search list in the DOM
function updatePastSearchList(cityList) {
    const pastSearchList = document.getElementById('pastSearch');
    pastSearchList.innerHTML = ''; // Clear the list
    cityList.forEach(city => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        pastSearchList.appendChild(listItem);
    });
}

const fetchButton = document.getElementById('searchBtn');
fetchButton.addEventListener('click', cityInputFunc);




// api retunrs these:
// cod Internal parameter
// message Internal parameter
// cntA number of timestamps returned in the API response
// list
// list.dt Time of data forecasted, unix, UTC
// list.main
// list.main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
// list.main.feels_like This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
// list.main.temp_min Minimum temperature at the moment of calculation. This is minimal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info here. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
// list.main.temp_max Maximum temperature at the moment of calculation. This is maximal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info here. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
// list.main.pressure Atmospheric pressure on the sea level by default, hPa
// list.main.sea_level Atmospheric pressure on the sea level, hPa
// list.main.grnd_level Atmospheric pressure on the ground level, hPa
// list.main.humidity Humidity, %
// list.main.temp_kf Internal parameter
// list.weather
// list.weather.id Weather condition id
// list.weather.main Group of weather parameters (Rain, Snow, Clouds etc.)
// list.weather.description Weather condition within the group. Please find more here. You can get the output in your language. Learn more
// list.weather.icon Weather icon id
// list.clouds
// list.clouds.all Cloudiness, %
// list.wind
// list.wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
// list.wind.deg Wind direction, degrees (meteorological)
// list.wind.gust Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
// list.visibility Average visibility, metres. The maximum value of the visibility is 10km
// list.pop Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
// list.rain
// list.rain.3h Rain volume for last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter
// list.snow
// list.snow.3h Snow volume for last 3 hours. Please note that only mm as units of measurement are available for this parameter
// list.sys
// list.sys.pod Part of the day (n - night, d - day)
// list.dt_txt Time of data forecasted, ISO, UTC
// city
// city.id City ID. Please note that built-in geocoder functionality has been deprecated. Learn more here
// city.name City name. Please note that built-in geocoder functionality has been deprecated. Learn more here
// city.coord
// city.coord.lat Geo location, latitude
// city.coord.lon Geo location, longitude
// city.country Country code (GB, JP etc.). Please note that built-in geocoder functionality has been deprecated. Learn more here
// city.population City population
// city.timezone Shift in seconds from UTC
// city.sunrise Sunrise time, Unix, UTC
// city.sunset Sunset time, Unix, UTC

