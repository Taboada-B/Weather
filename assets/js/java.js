const fetchButton = document.getElementById('searchBtn');

// receiving user input

function cityInput(event) {
    event.preventDefault();


    console.log('hello')


    apiFetch()
}


function apiFetch() {
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // api key : a3daa86f12fe3680bfa21c25ee469546
    // obtained this code at url: https://openweathermap.org/forecast5
    // example call: api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={API key}
    // const requestUrl = 'api.openweathermap.org/data/2.5/forecast?id=Denver&appid=a3daa86f12fe3680bfa21c25ee469546&units=imperial';

    // fetch(requestUrl).then(function(response) {
    //     return response.json();
    // });
    // console.log(response)
    console.log('hello again')
}


fetchButton.addEventListener('click', cityInput);




// // not my code below
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

