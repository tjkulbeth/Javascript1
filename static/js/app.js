// from data.js
var tableData = data;
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Output data file to html table
const tbody = d3.select("tbody");

console.log(data);

const table = d3.select("tbody")

// Select the submit button
const filterTable = d3.select("#filter-btn");
const resetTable = d3.select("#reset-btn");

tableData.forEach((sighting) => {
    const row = tbody.append("tr");
    columns.forEach(column => {
        row.append("td").text(sighting[column])
    }); 
});

// Complete the click handler for the form 
filterTable.on("click", function() {
    
    // clear the html tbody for new data
    tbody.html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select input element and get the value
    const dateValue = d3.select("#datetime").property("value").trim()
    const cityValue = d3.select("#city").property("value").trim()
    const stateValue = d3.select("#state").property("value").trim()
    const countryValue = d3.select("#country").property("value").trim()
    const shapeValue = d3.select("#shape").property("value").trim()
    
    // Show values in the console
    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);
    // console.log(tableData);

    // create an object of all the fields with values in them.
    var filteredQuery = {};

    if (dateValue != "") {
        filteredQuery["datetime"] = dateValue;
    } 
    if (cityValue != "") {
            filteredQuery["city"] = cityValue;
    } 
    if (stateValue != "") {
            filteredQuery["state"] = stateValue;
    } 
    if (countryValue != "") {
            filteredQuery["country"] = countryValue;
    } 
    if (shapeValue != "") {
            filteredQuery["shape"] = shapeValue;
    };

    console.log(filteredQuery);
    
    // filter out any criteria from input query that doesn't have a value
        function search(tableData){
        return Object.keys(this).every((key) => tableData[key] === this[key]);
      }

    // Use the form input and filter the data by date
    const filteredData = tableData.filter(search, filteredQuery);
    console.log(filteredData);

    // Output table to HTML
    filteredData.forEach(ufo => {
        var row = tbody.append("tr")
        columns.forEach(column => {
            row.append("td").text(ufo[column])
        }); 
    });

});

// Complete the click handler for the form 
resetTable.on("click", function() {
    
    // clear the html tbody for new data
    tbody.html("");

    tableData.forEach((sighting) => {
        const row = tbody.append("tr");
        columns.forEach(column => {
            row.append("td").text(sighting[column])
        }); 
    });
});