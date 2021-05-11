// Question: https://www.hackerrank.com/challenges/js10-function/problem



function factorial(n){
    if((n == 0)||(n == 1))
        return 1;
    else{
        return n*factorial(n-1);
    }
}

