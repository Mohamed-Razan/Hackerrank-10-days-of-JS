// Question: https://www.hackerrank.com/challenges/js10-throw/problem

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a == 0){
        return "Zero Error";
    }
    else if(a < 0){
        return "Negative Error";
    }
    else
        return "YES";
}

