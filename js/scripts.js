var literConversion = function(gallons) {return gallons/0.26417; } ;
var gallons = prompt("Enter the number of gallons.")
var literResult = literConversion(gallons).toFixed(2);
alert(literResult);

// var Galloneq = function(liter)
// {
//   return (liter * .26417);
// };
// var liter = prompt("Enter the number of Liters.");
// var result = Galloneq(liter).toFixed(2);
// alert(result);

var tbspEq = function(cups) {return cups * 16;};
var cups = prompt("Enter the number of cups.");
var tbsp = tbspEq(cups).toFixed(2);
alert(tbsp);
