function three(num1,num2)
{
    var a = Number.parseInt(num1);
    var b = Number.parseInt(num2);
    if((a == 3 || b == 3) && (a + b == 3 + a || b))
	return true;
    else
	return false;
}
