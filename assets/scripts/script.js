// Function to get user input from a text field
// parse that information to link into our API function
// generate content based on the retrieved JSON

// Formatting for input:
// https://www.loc.gov/search/?q= USERINPUT &fo=json
// https://www.loc.gov/manuscript/?q= USER\INPUT &fo=json

var link = "https://www.loc.gov/?fo=json&at=trending_content";

function getLibraryAPI(inputLink) {
    fetch(inputLink)
    .then(function(response) {
        // console.log(response.json());
        return response.json();
    }).then(function(data) {
        //console.log(data);
    })
}

function submitSearchQuery(event){
    event.preventdefault;
    //$("option[value='search']")
    console.log($('#search'))
    console.log('hi')
}

getLibraryAPI(link);

$('#search-form').click(submitSearchQuery())

console.log($('#search-form'))