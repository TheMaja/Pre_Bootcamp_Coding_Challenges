var $form, input1, answer, c;

function hoursMinutes(num) {
    num = input1;
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    
    if(hours >= 2  && minutes >= 2)
	return hours + " " + "Hours, " + minutes + " " +  "Minutes" ;
    else if(hours >= 2 && minutes <= 2)
	return hours + " " + "Hours, " + minutes + " " +  "Minute" ;
    else if(hours <= 2 && minutes >= 2 )
	return hours + " " + "Hour, " + minutes + " " +  "Minutes" ;
    else if(hours <= 2 && minutes <= 2)
	return hours + " " + "Hour, " + minutes + " " +  "Minute" ;

}


$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
   answer = hoursMinutes();
  $form.append('<p>' + answer + '</p>')
});
