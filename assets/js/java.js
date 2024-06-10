const fetchButton = document.getElementById('searchBtn');


// receiving user input, appending to title, calling apiFetch()

function cityInputFunc(event) {
    event.preventDefault();
    // accepting user input, removing white space, set to variable
    const cityInput = document.querySelector('#city-input').value.trim();
    localStorage.setItem('city-input', cityInput);
    // adding input to the Selected city span
    let spanEl = document.getElementById('city-output');
    spanEl.textContent = cityInput;
    apiFetch()
}

function apiFetch() {
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // api key : a3daa86f12fe3680bfa21c25ee469546
    // obtained this code at url: https://openweathermap.org/forecast5
    // example call: api.openweathermap.org/data/2.5/forecast?q={city name}&units=imperial&appid={API key}
    let cityInput = localStorage.getItem('city-input');
    console.log(cityInput)
    const apiKey = 'a3daa86f12fe3680bfa21c25ee469546';
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&appid=${apiKey}`;

    fetch(requestUrl)
        .then(response => {
            // if response isn't okay throw an error
            if (!response.ok) {
                console.log('this is where errors happen')
                throw new Error('City not found');

            }
            console.log('if no errors happen')
            return response.json();
        })
        //if previous .then is successful, run this
        .then(data => {
            // Format JSON output for readability
            console.log(data)

            console.log('is it working?', data.list.main.temp);
            // document.getElementById('curTemp').textContent = JSON.stringify(data.list.main.temp);
            // document.getElementById('curWind').textContent = JSON.stringify(data);
            // document.getElementById('curHumid').textContent = JSON.stringify(data);

        })
        .catch(error => {
            document.getElementById('error').textContent = `Error: ${error.message}`;
        });
};

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

