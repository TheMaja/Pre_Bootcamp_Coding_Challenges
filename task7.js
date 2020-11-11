//function that converts celsius to fahrenheit
function convert(celsius) {
    var  fahrenheit = 9/5 * celsius + 32;
    return fahrenheit.toPrecision(3);
}

//function that computes fahrenheit to celsius
function convert2(fahrenheit) {
    var celsius = 5/9 * (fahrenheit - 32);
    return celsius.toPrecision(3);
}
