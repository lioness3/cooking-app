// var literConversion = function(gallons) {return gallons/0.26417; } ;
// var gallons = prompt("Enter the number of gallons.")
// var literResult = literConversion(gallons);
// alert(literResult);

var Galloneq = function(liter)
{
  return (liter * .26417);
};
var liter = prompt("Enter the number of Liters.");
var result = Galloneq(liter).toFixed(2);
alert(result);
