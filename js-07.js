
function calculateSupply(currentAge, amountPerDay)
{
    maxAge = 100
    age =  (maxAge - currentAge);
    totalSupply = (365 * amountPerDay * age);
   
  return("You will need " + totalSupply +  " to last you until the ripe old age of 100");
 }
   
 console.log(calculateSupply(10, 3));
  
console.log(Math.round(179871.99999999997));

//The Geometrizer

function calcCircumference(radius)

{

   calcCircumference  = 2*3.14*radius
  return("The circumference is " + calcCircumference);
}

console.log(calcCircumference(6));


function calcArea(radius)
{
    calcArea = 3.14 *radius*radius
  return("The area is " + calcArea);
}

console.log(calcArea(10));


//The temperature converter

function celciusToFahrenheit(celcius) {

  celciusToFahrenheit = (9/5)*celcius + 32

  return(celcius  + " degree celcius is equal to " + celciusToFahrenheit + " degree Farenheit");


}

console.log(celciusToFahrenheit(5));


function fahrenheittocelcius(Farenheit) {

  fahrenheittocelcius = celcius = ((Farenheit-32) * (5/9))
   
  return(Farenheit + " degree Fahrenheit is equal to " + fahrenheittocelcius + " degree celcius");


}

console.log(fahrenheittocelcius(40));