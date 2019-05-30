var celcius = function(number1, number2, number3) {
  return number1 * number2 + number3;
};

var number1 = parseInt(prompt("Enter celcius:"));
var number2 = parseFloat(9/5);
var number3 = parseInt(32);
var result = celcius(number1, number2, number3);
alert(result);
