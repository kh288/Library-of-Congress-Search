

function getLibraryAPI(inputLink) {
    fetch(inputLink)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        //console.log(data);
    })
}
// getLibraryAPI(link);