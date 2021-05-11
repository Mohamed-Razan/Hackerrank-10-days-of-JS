// Question: https://www.hackerrank.com/challenges/js10-loops/problem



/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var c;
    for(var i = 0; i < s.length; i++){
        c = s.charAt(i);
        if((c == 'a')||(c == 'e')||(c == 'i')||(c == 'o')||(c == 'u')){
            console.log(c);
        }
    }
    for(var i = 0; i < s.length; i++){
        c = s.charAt(i);
        if((c != 'a')&&(c != 'e')&&(c != 'i')&&(c != 'o')&&(c != 'u')){
            console.log(c);
        }
    }
}

