var $form, input1, input2, answer, c;

function three(num1,num2)
{
    num1 = input1;
    num2 = input2;
    var a = Number.parseInt(num1);
    var b = Number.parseInt(num2);
    if((a == 3 || b == 3) && (a + b == 3 + a || b))
	return true;
    else
	return false;

}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
  input2 = $('#input2').val();
  answer = three();
  $form.append('<p>' + answer + '</p>')
});
