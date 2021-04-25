var $form, input1, input2, answer, c;

function sixFive(param1,param2)
{
    param1 = input1;
    param2 = input2;
    var a = Number.parseInt(param1);
    var b = Number.parseInt(param2);
    if((a==65 || b == 65) || (a + b == 65))
	return true;
    else
	return false;
}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
  input2 = $('#input2').val();
  answer = sixFive();
  $form.append('<p>' + answer + '</p>')
});
