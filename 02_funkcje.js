function welcome(firstName)
{
console.log(`Witam. ${firstName} - miłego dnia życzę!`)
} 
welcome("Dorian");
welcome("Mati")


function multiplication (a,b)
{
    return a*b;
}
console.log(multiplication(3,2));
console.log(multiplication(34,99));


function kw(x)
{
    return x*x;
}

console.log(kw(2));
console.log(kw(20));

function cost(meter,priceMeter,price)
{
 console.log(`Koszt malowania pokoju o powierzchni ${meter} wynosi razem ${meter*price+priceMeter}`)
}

console.log(cost(30,10,300));

function cost2(meter,priceMeter,price)
{
    priceMeter=10;
    price=500;
 console.log(`Koszt malowania pokoju o powierzchni ${meter} wynosi razem ${meter*price+priceMeter}`)
}

console.log(cost2(20));