var $form, input1, input2, answer, c;

function duplicate(str1,str2) {
    str1 = input1;
    str2 = input2;
    var comm = {};

    for(var i = 0; i < str1.length; i++)
    {
	comm[str1.charAt(i)] = 2;
    
    }

    var charsDuplicate = [];

    for(var i = 0; i < str2.length; i++)
    {
	if(comm[str2.charAt(i)] == 2)
	{
	    charsDuplicate.push(str2.charAt(i));
	    
	}
    
    }
    let dupli = charsDuplicate.join(" ");
    return dupli;

}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
  input2 = $('#input2').val();
  answer = duplicate();
  $form.append('<p>' + answer + '</p>')
});
