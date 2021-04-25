var $form, input1, input2, input3, answer, c;

function triangleArea(side1,side2,side3)
{
    side1 = input1;
    side2 = input2;
    side3 = input3;
    var a = Number.parseFloat(side1);
    var b = Number.parseFloat(side2);
    var c = Number.parseFloat(side3);
    //Semiperimeter
    var s = ((a + b + c) * 0.5);
    //Heron's Formula
    var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    return area.toPrecision(3);
}

$form = $('#calculator');
$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting
  input1 = $('#input1').val();
  input2 = $('#input2').val();
  input3 = $('#input3').val();
  answer = triangleArea();
  $form.append('<p>' + answer + '</p>')
});
