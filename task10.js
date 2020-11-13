function vowels(str) {
    let a =  str.match(/[aeiou]/gi);
    let b =  [...new Set(a)];
    return b.join(" ");
}
