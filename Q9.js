// Question: https://www.hackerrank.com/challenges/js10-arrays/problem



/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    var i, j, l, temp;
    l = nums.length;
    for(i = 0; i < l-1; i++){
        for(j = i+1; j < l; j++){
            if(nums[j] > nums[i]){
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    var max = nums[0];
    for(i = 1; i < l; i++){
        if(max != nums[i]){
            var ans = nums[i];
            break;
        }
    }
    return ans;
}

