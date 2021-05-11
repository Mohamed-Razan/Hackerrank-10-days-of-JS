// Question: https://www.hackerrank.com/challenges/js10-if-else/problem



function getGrade(score) {
    let grade;
    if((parseInt(score) > 25)&&(parseInt(score) <= 30))
        grade = "A";
    else if((parseInt(score) > 20)&&(parseInt(score) <= 25))
        grade = "B";
    else if((parseInt(score) > 15)&&(parseInt(score) <= 20))
        grade = "C";
    else if((parseInt(score) > 10)&&(parseInt(score) <= 15))
        grade = "D";
    else if((parseInt(score) > 5)&&(parseInt(score) <= 10))
        grade = "E";
    else if((parseInt(score) > 0)&&(parseInt(score) <= 5))
        grade = "F";
    return grade;
}

