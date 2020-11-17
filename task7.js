/*
The first function convert() takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. the second function convert2() takes in a number representing the temperature in Fahrenheit and returns the temperature in Celsius.
*/

//function that converts celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    var  fahrenheit = 9/5 * celsius + 32;
    return fahrenheit.toPrecision(3);
}

//function that computes fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    var celsius = 5/9 * (fahrenheit - 32);
    return celsius.toPrecision(3);
}
