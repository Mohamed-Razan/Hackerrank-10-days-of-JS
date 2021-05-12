// Question: https://www.hackerrank.com/challenges/js10-bitwise/problem


function getMaxLessThanK(n, k){
    var i, j, sum = 0, max = 0;
    var a = new Array();
    for(i = 0; i < n; i++){
        a[i] = i+1;
    }
    for(i = 0; i < n-1; i++){
        for(j = i+1; j < n; j++){
            sum = a[i] & a[j];
            if((sum > max)&&(sum < k)){
                max = sum;
            }
        }
    }
    return max;
}
