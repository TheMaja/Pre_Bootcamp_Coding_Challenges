/*
This function returns the sum of all the multiples of 3 or 5 below a certain input number.
*/

function naturalNumber(num) {
    var count = 0;
    for(let i = 0; i < num ; i++)
    {
	if(i % 3  == 0)
	    count += i
	if(i % 5 == 0)
	    count += i
    }
    return count;
}

//naturalnum(1000) => 266333
//The sum of all the multiples of 3 or 5 below 1000 is 266333.
