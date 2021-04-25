var $form, input1, answer, c;

function celsiusToFahrenheit(celsius) {
    celsius = input1;
    var  fahrenheit = 9/5 * celsius + 32;
    return fahrenheit.toPrecision(3);
}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
   answer = celsiusToFahrenheit();
  $form.append('<p>' + answer + '</p>')
});
