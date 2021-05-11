// Question: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem



/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch(e){
        console.log("s.split is not a function");
        console.log(s);
    }
}

