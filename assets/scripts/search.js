var queryURL = window.sessionStorage.getItem("inputURL");
queryURL = JSON.parse(queryURL);

function getLibraryAPI(inputLink) {
    fetch(inputLink)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        loadResults(data.results);
    })
}

getLibraryAPI(queryURL);

function loadResults(results) {
    for(var i = 0; i < results.length; i++){
        console.log(results[i].title);
        console.log(results[i].date);
        console.log(results[i].subject); // An array
        console.log(results[i].description); // Also an array
        console.log(results[i].url);
        console.log("-------------------------------------------");
    }
}
console.log(queryURL);