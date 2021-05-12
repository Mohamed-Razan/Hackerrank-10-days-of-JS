// Question: https://www.hackerrank.com/challenges/js10-regexp-1/problem



function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    
    /*
     * Do not remove the return statement
     */
    var re = /^[a][a-z]*[a]$|^[e][a-z]*[e]$|^[i][a-z]*[i]$|^[o][a-z]*[o]$|^[u][a-z]*[u]$/;
    return re;
}

