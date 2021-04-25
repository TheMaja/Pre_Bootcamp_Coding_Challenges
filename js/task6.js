var $form, input1, input2, input3, answer, c;

function max(num1,num2,num3) {

    num1 = input1;
    num2 = input2;
    num3 = input3;
    let p = [num1,num2,num3]
    let maximum = p[0];
    for(let i = 1; i < p.length; i++)
    {
        if(p[i] > maximum)
            maximum = p[i];
    
    }
    return maximum;
}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
  input2 = $('#input2').val();
  input3 = $('#input3').val();
  answer = max();
  $form.append('<p>' + answer + '</p>')
});
