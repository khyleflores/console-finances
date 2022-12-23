var finances = [
['Jan-2010', 1000],
['Feb-2010', 2000],//1000
['Mar-2010', -500],//-2500
['Apr-2010', 3500],//4000
['May-2010', 2000]//-1500
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
var totalChange = 0;
var averageChange = 0;
var monthlyProfits = [];
var mostProfit= 0;
var leastProfit= 0;
var mostProfitableMonth = "";
var leastProfitableMonth = "";


// The total number of months included in the dataset.
totalMonths = finances.length;

//Inserting a 0 on the first array of profit to be able to use Math function and avoid NAN result.
finances[0].push(0);
//Adding the details of total change in profits from month to month
for (var i = 0; i < finances.length-1; i++) {
  finances[i+1].push(finances[i+1][1] - finances[i][1]);
  //another one-dimensional array to easily calculate the greatest increase and decrease later
  monthlyProfits.push(finances[i+1][1] - finances[i][1]);
}

//The net total amount of Profit/Losses over the entire period. 
for (var i = 0; i < finances.length; i++) {
  //gets the sum of profits
  netTotal += finances[i][1];
  //gets the sum of the newly added column of total change in profits from month to month
  totalChange += finances[i][2];  
}

//Total divided by Number of months to get the average of the changes over the entire period
averageChange = totalChange / totalMonths;

//Calculating greatest increase in profits using Math.max()
mostProfit = Math.max(...monthlyProfits);
//Calculating greatest decrease in profits using Math.min()
leastProfit = Math.min(...monthlyProfits);

//created a loop to find the most profited month 
for (var i = 0; i < finances.length; i++) {
  //if column 3 matches the mostProfit - save the detail to the variables
  if(finances[i][2] == mostProfit){
    mostProfitableMonth = finances[i][0];
    //added mostProfit in here to make sure that we are getting the same details of a month in case there are duplicates
    mostProfit = finances[i][2]
  }
  //if column 3 matches the leastProfit - save the detail to the variables
  else if(finances[i][2] == leastProfit){
    leastProfitableMonth = finances[i][0];
    //added leastProfit in here to make sure that we are getting the same details of a month in case there are duplicates
    leastProfit = finances[i][2];
  }
}

//Print resulting analysis in browser
console.log("Financial Analysis" + 
"\n----------------------------" +
"\nTotal months: " + totalMonths +
"\nTotal: $" + netTotal +
"\nAverage Change: $" + averageChange +
"\nGreatest Increase in Profits: " + mostProfitableMonth + " ($" + mostProfit + ")" +
"\nGreatest Decrease in Profits: " + leastProfitableMonth + " ($" + leastProfit + ")");

