# Library-of-Congress-Search
A webpage that queries the Library of Congress records


## Introduction 

The Library of Congress Search is a website that searches for and displays results obtained from the Library of Congress servers. It displays results with basic details and a link to the relevant resource on the Library of Congress website.

![Screencapture of planner showing data persistance.](https://github.com/CommieDog/one-day-planner/blob/main/assets/images/readme/one-day-planner-screencap.gif)

A sample deployment of the website is available on [GitHub Pages](https://commiedog.github.io/one-day-planner/).


## Table of Contents

* [Description](#description)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Future Work](#future-work)
* [Authors](#authors)
* [License](#license)


## Description

The Library of Congress Search opens to a simple landing page with a form for the user to enter search keywords and media format (as defined by the Library of Congress). Sumbitting the form causes the site to navigate to the results page. The results page takes the search criteria entered on the landing page and sends a request to the Library of Congress API through use of JavaScript's Fetch API.

When the Library of Congress Search receives a response, it parses through the response to retrieve the titles, dates, subjects, descriptions, and URLs for each item received from the server response. Once the response has been broken down, the results page constructs HTML code to display the results on itself.


## Features

* Enter customizable search criteria
* Use of Library of Congress API to retrieve data straight from the source
* Displays results in convienient, digested form
  * Link to Library of Congress item for those who want to dig deeper


## Technologies Used

* HTML
* CSS
  * Bootstrap
* JavaScript
  * Fetch API
  * jQuery
  * Web Storage API


## Future Work

Currently the Library of Congress Search only looks for keywords and media format; expanding the amount of criteria to refine searches would be helpful for users. Additionally, user input for the format of the results could be added.


## Credits

[Bootstrap](https://getbootstrap.com/) used under MIT License

[jQuery](https://jquery.com/) used under MIT License


## Authors

* [Richard Ferry]()
* [Kevin Hernandez]()
* [John Netzel](https://github.com/CommieDog)

## License
&copy; 2022 Richard Ferry, Kevin Hernandez, and John Netzel. All Rights Reserved.
