/*This function takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then it  return true  Otherwise it return false
*/

function three(num1,num2)
{
    var a = Number.parseInt(num1);
    var b = Number.parseInt(num2);
    if((a == 3 || b == 3) && (a + b || b + a  % 10 == 3))
	return true;
    else
	return false;
}
