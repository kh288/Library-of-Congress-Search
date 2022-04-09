const searchContentEl = $("#generate-content");

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
// load out information to page, titles, dates, subjects,descriptions, and links
function loadResults(results) {
    for(var i = 0; i < results.length; i++){
        var cardEl = $("<div>");
        
        var cardTitleEl = $("<h2>");
        cardTitleEl.text(results[i].title);
        cardTitleEl.appendTo(cardEl);
        
        var cardDateEl = $("<p>");
        cardDateEl.text(results[i].date);
        cardDateEl.appendTo(cardEl);

        var cardSubjectEl = $("<p>");
        cardSubjectEl.text(results[i].subject.join(', '));
        cardSubjectEl.appendTo(cardEl);

        var cardDescriptionEl = $("<p>");
        cardDescriptionEl.text(results[i].description[0]);
        cardDescriptionEl.appendTo(cardEl);

        var cardUrlEl = $("<a>");
        cardUrlEl.text('Read more');
        cardUrlEl.attr('href',results[i].url)
        cardUrlEl.appendTo(cardEl);

        cardEl.appendTo(searchContentEl);
        

        console.log(results[i].title);
        console.log(results[i].date);
        console.log(results[i].subject); // An array
        console.log(results[i].description); // Also an array
        console.log(results[i].url);
        console.log("-------------------------------------------");
    }
}
console.log(queryURL);