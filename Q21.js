// Question: https://www.hackerrank.com/challenges/js10-regexp-2/problem



function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    
    /*
     * Do not remove the return statement
     */
    var re = /^Mr\.[a-zA-Z]*$|^Mrs\.[a-zA-Z]*$|^Ms\.[a-zA-Z]*$|^Dr\.[a-zA-Z]*$|^Er\.[a-zA-Z]*$/;
    return re;
}

