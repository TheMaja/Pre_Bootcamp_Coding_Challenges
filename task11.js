/*
This duplicate() function  takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)
*/

function duplicate(str1,str2) {
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
