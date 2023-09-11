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
    let pi=3.14;
    console.log(`The circumference is ${2*radius*pi}`);
}

console.log(calcCirumfrence(4));


function calcArea(r)
{
    let pi=3.14;
    console.log(`The area is ${pi*2*r}`);
}
console.log(calcArea(1));