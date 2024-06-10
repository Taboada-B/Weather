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
    const apiKey = 'a3daa86f12fe3680bfa21c25ee469546';
    const requestUrl = `api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`;

    fetch(requestUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        // Format JSON output for readability
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
};


    console.log('hello again2')



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

