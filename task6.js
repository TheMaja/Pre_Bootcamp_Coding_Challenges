/*
The are two function below, the first functiontakes in three numbers and it returns the maximum number.the second function takes any number of numbers and it returns the maximum numberof those numbers .
*/

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
function maxAnyNumber(...anynum) {
    let maximum = anynum[0];
    for(let i = 1; i < anynum.length; i++)
    {
	if(anynum[i] > maximum)
	    maximum = anynum[i];
    }
    return maximum;
}
