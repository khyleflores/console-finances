var finances = [
['Jan-2010', 1000],
['Feb-2010', 2000],//1000
['Mar-2010', -500],//2500
['Apr-2010', 3500]//4000
];

//The average of the changes in Profit/Losses over the entire period.
    //You will need to track what the total change in profits are from month to month and then find the average.
    //(Total/Number of months)
//The greatest increase in profits (date and amount) over the entire period.
//The greatest decrease in profits (date and amount) over the entire period.

//variable to hold total number of months
//variable to hold the net total
//variable to hold averange change
//variable to hold greatest increase in profits
//variable to hold greatest decrease in profits
//variable to hold month --
//variable to hold profit --

var totalMonths = 0;
var netTotal = 0;
var averageChange = 0;
var monthlyProfits = [];
var totalChange = 0;
var mostProfitable= "";
var leastProfitable= "";

// The total number of months included in the dataset.
totalMonths = finances.length;
//console.log("Total month is " + totalMonths);

//The net total amount of Profit/Losses over the entire period. 
for (var i = 0; i < finances.length; i++) {
  netTotal += finances[i][1];
}

//console.log("Net total is " +netTotal); 

//You will need to track what the total change in profits are from month to month and then find the average.
function getDifference(a, b) {
    return a - b;
  }

for (var i = 0; i < finances.length; i++) {
    monthlyProfits.push(finances[i][1]);
}

for (var i = 0; i < monthlyProfits.length; i++) {
    console.log(getDifference(monthlyProfits[i+1], monthlyProfits[i]));
}

