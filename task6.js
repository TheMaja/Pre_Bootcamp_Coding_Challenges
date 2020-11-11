function max(num1,num2,num3) {
    let maximum = arguments[0];
    for(let i = 1; i < arguments.length; i++)
    {
        if(arguments[i] > maximum)
            maximum = arguments[i];
    }
    return maximum;
}

//function max_anynumber takes any number of numbers
function max_anynumber(...anynum) {
    let maximum = anynum[0];
    for(let i = 1; i < anynum.length; i++)
    {
	if(anynum[i] > maximum)
	    maximum = anynum[i];
    }
    return maximum;
}
