var $form, input1, answer, c;

function naturalNumber(num) {
    num = input1;
    var count = 0;
    for(let i = 0; i < num ; i++)
    {
	if(i % 3  == 0)
	        count += i
	if(i % 5 == 0)
	        count += i
    
    }
    return count;

}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
   answer = naturalNumber();
  $form.append('<p>' + answer + '</p>')
});
