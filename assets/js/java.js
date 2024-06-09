const fetchButton = document.getElementById('searchBtn');

// receiving user input

function cityInput(event) {
    event.preventDefault();
    const cityObject = document.querySelector('#city-input').value.trim();
    console.log('cityob:', cityObject);
    const cityString = JSON.stringify(cityObject);
    console.log('city string:', cityString);
    
    localStorage.setItem('city-input', cityString);
    console.log('localStorage:', 'hello from cityInput function', localStorage);

    // apiFetch()
}

// function apiFetch() {
//     // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//     // api key : a3daa86f12fe3680bfa21c25ee469546
//     // obtained this code at url: https://openweathermap.org/forecast5
//     // example call: api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={API key}
//     const apiKey = a3daa86f12fe3680bfa21c25ee469546;
//     const requestUrl = `api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${apiKey}`;
//     console.log(requestUrl);

//     fetch(requestUrl).then(function(response) {
//         // if (response.status === 200) {
            
//         //     return response.json
//         // }
//         // else{
//         //     return console.log(error)
//         // }
//          console.log(response);
//          console.log('hello again1')
//     });
   
    
//     console.log('hello again2')
// }


fetchButton.addEventListener('click', cityInput);







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

