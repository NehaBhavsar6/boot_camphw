//w3resource javasript basic exercise
//Get the current date and time
var today = new Date();

console.log(today);

//Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

console.log(day);


//Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Display the current day
console.log("Today is: " + daylist[day] + ".");

//Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

console.log(hour);
console.log(minute);
console.log(second);


//write a JavaScript program to print the current window contents

function print_current_page() //defining
{
    window.print();
} // 

//write a Javascript program to find the area of triangle

//define the length of sides
var side1 = 5;
var side2 = 6;
var side3 = 7;
//calculate the semi-perimeter

var s = (side1 + side2 + side3)/2;

//use Heron's formula to calculate the area of triangle

var area = Math.sqrt(s*((s-side1) *(s-side2)* (s-side3)));

//log the area to console

console.log(area);





