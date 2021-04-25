var $form, input1, answer, c;

function vowels(str) {
    str = input1;
    let a =  str.match(/[aeiou]/gi);
    let b =  [...new Set(a)];
    return b.join(" ");

}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
   answer = vowels();
  $form.append('<p>' + answer + '</p>')
});
