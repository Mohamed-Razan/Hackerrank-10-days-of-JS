// Question: https://www.hackerrank.com/challenges/js10-let-and-const/problem



function main() {
    const pi = Math.PI;
    let r, area, perimeter;
    r = +(readLine());
    area = pi*parseFloat(r)*parseFloat(r);
    perimeter = 2*pi*parseFloat(r);
    console.log(area);
    console.log(perimeter);


