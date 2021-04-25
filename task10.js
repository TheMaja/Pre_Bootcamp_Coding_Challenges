/*
This function takes in a string and then returns  out all the vowels in the string.it can deal with capital letters and small letters.
*/

function vowels(str) {
    let a =  str.match(/[aeiou]/gi);
    let b =  [...new Set(a)];
    return b.join(" ");
}
