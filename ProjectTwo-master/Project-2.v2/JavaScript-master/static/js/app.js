const scanDate= moment().format("MMM Do YY");

console.log(scanDate)

d3.select(".foo").text(`${scanDate}`)
var div = document.getElementById('curr_time');
function time() {
 div.innerHTML = "";
 var d = new Date();
 var s = d.getSeconds();
 var m = d.getMinutes();
 var h = d.getHours();
 div.innerHTML = h + ":" + m + ":" + s;
}
setInterval(time, 1000);

const tbody = d3.select('tbody')

function init() {
  var url = "/CityNames";
  d3.json(url).then( (data) => {
    // Attach an event to listen for the form button
    // Build the table when the page loads
    buildTable(data);
  })
}


function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var city = d3.select("#City").property("value");

  // Check to see if a date was entered and filter the
  // data using that date.
  if (city) {
    // Apply `filter` to the table data to only keep the
    const filteredData = data.filter(function(row) {
      return row.city === city;
    });
    buildTable(filteredData);
  } else {
    buildTable(data)
  }
  
}

init()

d3.selectAll("#filter-btn").on("click", handleClick);
/*
const scanDate= moment().format("MMM Do YY");
console.log(scanDate)
d3.select(".foo").text(${scanDate})
var div = document.getElementById('curr_time');
function time() {
 div.innerHTML = "";
 var d = new Date();
 var s = d.getSeconds();
 var m = d.getMinutes();
 var h = d.getHours();
 div.innerHTML = h + ":" + m + ":" + s;
}
setInterval(time, 1000);
*/