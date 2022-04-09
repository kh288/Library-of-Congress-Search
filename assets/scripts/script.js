// Function to get user input from a text field
// parse that information to link into our API function
// generate content based on the retrieved JSON

// Formatting for input:
// https://www.loc.gov/search/?q= USERINPUT &fo=json
// https://www.loc.gov/manuscript/?q= USER\INPUT &fo=json

var link = "https://www.loc.gov/?fo=json&at=trending_content";
var searchInput = "";
var inputForm = $("#search-form");
var selectBox = $("#select-box");
var searchInput = $("#search-input");

function getLibraryAPI(inputLink) {
    fetch(inputLink)
    .then(function(response) {
        // console.log(response.json());
        return response.json();
    }).then(function(data) {
        //console.log(data);
    })
}
// getLibraryAPI(link);

// Gets input from both the search diag box and options dropdown
function submitSearchQuery(event){
    event.preventDefault();
    // console.log(searchInput.val());
    // console.log(selectBox.val());
    buildURL(searchInput.val(), selectBox.val());
}

// Builds URL with the user input provided from the submitSearchQuery function
function buildURL (search, format) {
    // https://www.loc.gov/search/?q= USERINPUT &fo=json
    // https://www.loc.gov/manuscript/?q= USERINPUT &fo=json

    var tempLink = "https://www.loc.gov/" + format + "/?q=" + search + "&fo=json";
    console.log(tempLink);
    saveURLToStorage(tempLink);
}

function saveURLToStorage(url)
{
    window.sessionStorage.setItem("inputURL", JSON.stringify(url));
}

$('#search-form').on('submit',submitSearchQuery);
