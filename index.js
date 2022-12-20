var finances = [
['Jan-2010', 1000],
['Feb-2010', 2000],//1000
['Mar-2010', -500],//-2500
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
var mostProfitable= 0;
var mostProfitableMonthIndex = 0;
var leastProfitable= 0;

/*

// The total number of months included in the dataset.
totalMonths = finances.length;
console.log("Total month is " + totalMonths);

//The net total amount of Profit/Losses over the entire period. 
for (var i = 0; i < finances.length; i++) {
  netTotal += finances[i][1];
}

console.log("Net total is " + netTotal); 

//Track total change in profits from month to month
//First get all the difference of each months ie Febuary - January and put in array
//finances.length-1 to avoid Null to be substracted to the last index
for (var i = 0; i < finances.length-1; i++) {
  monthlyProfits.push(finances[i+1][1] - finances[i][1]);
}
//Add all monthlyProfits to get the total change in profits
for (var i = 0; i < monthlyProfits.length; i++) {
  totalChange += monthlyProfits[i];
}
//Total/Number of months to get the average of the changes over the entire period
averageChange = totalChange / totalMonths;
console.log("Total Change in Profits is " + totalChange); 
console.log("average of the changes in Profit/Losses over the entire period " + averageChange); 

//Calculating greatest increase in profits using Math.max()
mostProfitable = Math.max(...monthlyProfits);
console.log("Greatest increase is :" + mostProfitable);

*/

// The total number of months included in the dataset.
totalMonths = finances.length;
console.log("Total month is " + totalMonths);

finances[0].push(0);
for (var i = 0; i < finances.length-1; i++) {
  finances[i+1].push(finances[i+1][1] - finances[i][1]);
}

//The net total amount of Profit/Losses over the entire period. 
for (var i = 0; i < finances.length; i++) {
  netTotal += finances[i][1];
  totalChange += finances[i][2];

  //Calculating greatest increase in profits using Math.max()
  mostProfitable = Math.max(finances[i][2]);
  
}
console.log("Net total is " + netTotal); 

//Total/Number of months to get the average of the changes over the entire period
averageChange = totalChange / totalMonths;
console.log("Total Change in Profits is " + totalChange); 
console.log("average of the changes in Profit/Losses over the entire period " + averageChange);

console.log(mostProfitable);

for (var i = 0; i < finances.length; i++) {
  
  if(finances[i][2] == mostProfitable){
     console.log("Greatest Increase in Profits: " + finances[i][0] + " ($" + finances[i][2] + ")");
  }
}

