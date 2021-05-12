// Question: https://www.hackerrank.com/challenges/js10-date/problem



// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    var s = Date.parse(dateString);
    var d = new Date(s);
    var n = d.getDay();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return day[n];
}

