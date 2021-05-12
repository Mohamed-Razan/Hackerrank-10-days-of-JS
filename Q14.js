// Question: https://www.hackerrank.com/challenges/js10-class/problem

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    constructor(arr){
        this.a = arr;
    }
    perimeter(){
        var i, sum = 0;
        for(i = 0; i < this.a.length; i++){
            sum = sum + this.a[i];
        }
        return sum;
    }
}

