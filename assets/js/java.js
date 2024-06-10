
// receiving user input, appending to title, calling apiFetch()

function cityInputFunc(event) {
    event.preventDefault();
    // accepting user input, removing white space, set to variable
    const cityInput = document.querySelector('#city-input').value.trim();
    localStorage.setItem('city-input', cityInput);
    // adding input to the Selected city span
    let spanEl = document.getElementById('city-output');
    spanEl.textContent = cityInput;
    apiFetch();
}

function apiFetch() {
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // api key : a3daa86f12fe3680bfa21c25ee469546
    // obtained this code at url: https://openweathermap.org/forecast5
    // example call: api.openweathermap.org/data/2.5/forecast?q={city name}&units=imperial&appid={API key}
    let cityInput = localStorage.getItem('city-input');
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
        })
        // catch all, display error 
        .catch(error => {
            document.getElementById('error').textContent = `Error: ${error.message}`;
        });
};

function renderData(data){

 // rendering current data to page: current temp, current wind, current humidity, today's date (day0).
            document.getElementById('curTemp').textContent = `${data.list[0].main.temp} °F`;
            document.getElementById('curWind').textContent = `${data.list[0].wind.speed} mph`;
            document.getElementById('curHumid').textContent = `${data.list[0].main.humidity} %`;
            // let date = 
            document.getElementById('date0').textContent = `${data.list[0].dt_txt}`;
// rendering 5 day forcast
// list[0] to list [1] is 3 hours list [0] to list [7] 24hrs
// day1
// document.getElementById('day1').textContent = 
document.getElementById('temp1').textContent = `${data.list[7].main.temp} °F`;
document.getElementById('wind1').textContent = `${data.list[7].wind.speed} mph`;
document.getElementById('humidity1').textContent = `${data.list[7].main.humidity} %`;
//day 2
document.getElementById('temp2').textContent = `${data.list[15].main.temp} °F`;
document.getElementById('wind2').textContent = `${data.list[15].wind.speed} mph`;
document.getElementById('humidity2').textContent = `${data.list[15].main.humidity} %`;
//day 3
document.getElementById('temp3').textContent = `${data.list[23].main.temp} °F`;
document.getElementById('wind3').textContent = `${data.list[23].wind.speed} mph`;
document.getElementById('humidity3').textContent = `${data.list[23].main.humidity} %`;
//day 4
document.getElementById('temp4').textContent = `${data.list[31].main.temp} °F`;
document.getElementById('wind4').textContent = `${data.list[31].wind.speed} mph`;
document.getElementById('humidity4').textContent = `${data.list[31].main.humidity} %`;
//day 5
document.getElementById('temp5').textContent = `${data.list[39].main.temp} °F`;
document.getElementById('wind5').textContent = `${data.list[39].wind.speed} mph`;
document.getElementById('humidity5').textContent = `${data.list[39].main.humidity} %`;

}



const fetchButton = document.getElementById('searchBtn');
fetchButton.addEventListener('click', cityInputFunc);


// // not my code below

// const repoList = document.querySelector('ul');
// const fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // replace `octocat` with anyone else's GitHub username
//   const requestUrl = 'https://api.github.com/users/octocat/repos';

//   fetch(requestUrl).then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let i = 0; i < data.length; i++) {
//         const listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }





// const tableBody = document.getElementById('repo-table');

// function getApi() {

//   // fetch request gets a list of all the repos for the node.js organization
//   const requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json(); // this is a json string
//     })
//     .then(function (data) {
//       console.log(data); // this is now an array of objects
//       // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
//       for (const repo of data) {
//         // Creating elements, tablerow, tabledata, and anchor
//         const createTableRow = document.createElement('tr');
//         const tableData = document.createElement('td');
//         const link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = repo.html_url;
//         link.href = repo.html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);


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

