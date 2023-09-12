function tellFortune(numberChilldren, partner, location, jobTitle )
{
console.log(`You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numberChilldren} kids.`);
}
console.log(tellFortune(3,"Kamil","Sipiory","Mechanik"));


function calculateDogAge(age)
{
    console.log(`Your doogie is ${age*7} years old in dog years!`);
}

console.log(calculateDogAge(3));


function calculateSupply(age,day)
{
    const maxAge=100;
    console.log(`You will need ${(maxAge-age)*365*day} to last you until the ripe old age of ${maxAge}`);
}
console.log(calculateSupply(19,2));




function calcCirumfrence(radius)
{
    console.log(`The circumference is ${3.14*radius}`);
}

console.log(calcCirumfrence(4));


function calcArea(radius)
{
    console.log(`The area is ${radius**2*3.14}`);
}
console.log(calcArea(1));


function celsiusToFahreheit(s)
{
    console.log(`${s}°C is ${(9/5*s)+32}`)
}

console.log(celsiusToFahreheit(5));


function fahrenheitToCelsius(f)
{
  console.log(`${f}°F is ${(f-32)*5/9 }°C.`)  
}

console.log(fahrenheitToCelsius(64));

function reverseNum(number)
{
    return  1/number;
}

console.log(reverseNum(2));