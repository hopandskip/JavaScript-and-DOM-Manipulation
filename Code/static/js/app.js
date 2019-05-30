// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and 
// Use Object entries to add key, values from data to html table
data.forEach(function(ufoSightings){
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value)
    });
});

// Assign the clicking of the filter button to a variable
var buttonClick= d3.select("#filter-btn")

// After user clicks the button, filter data based on the userInput
buttonClick.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // select the data inputted by the user
    var userInput = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = userInput.property("value");

    // Log the date entered by the user;
    console.log(inputValue);
  
    // Reset the data in the table to blank
    var tbody = d3.select("tbody").text('')

    // Filter the data by the date inputted by the user
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

    // Display the filtered data when user clicks the button
    filteredData.forEach(function(ufoSightings){
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value)
        });
    });
});