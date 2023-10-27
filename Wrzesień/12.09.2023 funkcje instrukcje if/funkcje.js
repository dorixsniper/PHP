function tablice(table)
{
    return table[0];
}

console.log(tablice([1,2,3]));
console.log(tablice([14,22,365]));



function mniej100(x,y)
{
    if(x+y<100)
    {
        return true;   
    }
    else
    {
        return false;
    }
    
}
console.log(mniej100(5,3));
console.log(mniej100(99,22));


function czyRowne(x,y)
{
    if(x=y)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(czyRowne(12,5));
console.log(czyRowne(34,3));


function czyParzyste(x)
{
    if(x%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(czyParzyste(45));
console.log(czyParzyste(2));

function czyparzyste(y){
    return (y%2==0)
}
console.log(czyparzyste(4));


function link(firstName,surName)
{
    return firstName + ' ' + surName;
}
console.log(link( 'Matuesz', 'Baran'));


function pay(x,y,z)
{
    return payMax(x,y,z) - payMin(x,y,z)
}

function payMax(a,b,c)
{
    if(a>b){
        if(a>c){
            return a;
                }
                else{
                    return c;
                }
    }
    else{
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
}

function payMin(a,b,c)
{
    if(a<b){
        if(a<c){
            return a;
                }
                else{
                    return c;
                }
    }
    else{
        if(b<c){
            return b;
        }
        else{
            return c;
        }
    }
}

console.log(pay(3,5,2));


function isOdd(number){
    return number%2!=0;
}
console.log(isOdd(5));


function isDivided(a,b)
{
    return a%b==0;
}
console.log(isDivided(5));


function isLeapYear(year)
{
    return isDivided(year,4) && !isDivided(year,100) || isDivided(year,400)
}

console.log(isLeapYear(2022));
console.log(isLeapYear(2020));

function halfOf(number){
    return number/2;
}
console.log(halfOf(2));
console.log(halfOf(2137));


function IsLongerThan(text,number){
    return text.lenght>number;
}
console.log(IsLongerThan(`SOS`,2))
