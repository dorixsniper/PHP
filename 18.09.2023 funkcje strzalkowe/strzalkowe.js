
function toSecond(minutes)     /*  zwykła funkcja  */
{
    console.log(minutes*60);
}
toSecond(5);


const toSecondsW = function(minutes){         /*  wyrazenie funkcyjne  */
    console.log(minutes*60)
}
toSecondsW(15);



const toSecondS = (minutes) => {         /*  funkcja strzałkowa  */
    console.log(minutes*60)
}
toSecondS(51);


const toSecondS2 = minutes => console.log(minutes*60);  /*  funkcja strzalkowa skrocona  */
const toSecondS3 = minutes => minutes*60;  /*  funkcja strzalkowa skrocona bez return  */


toSecondS2(513);
toSecondS3(514);



const Oblicz = function(x,y){ 
    return x+y};

console.log(Oblicz(5,2));



const Oblicz2 = (a,b) => a+b;
console.log(Oblicz2(50,10));





const kwadrat = function(a){
    return a*a;
}
console.log(kwadrat(5));


const kwadrat2= a =>  a*a;
console.log(kwadrat2(15));

