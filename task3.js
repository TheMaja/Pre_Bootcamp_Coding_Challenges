/*This function  takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 it return true. Otherwise it return false.*/

function sixfive(param1,param2)
{
    var a = Number.parseInt(param1);
    var b = Number.parseInt(param2);
    if((a==65 || b == 65) || (a + b == 65))
	return true;
    else
	return false;
}
