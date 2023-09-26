
function calculateDogAge (age){
    console.log(`Your doggie is ${age*7} years old in dog years!`)
}

calculateDogAge(5);



function trojkat(podstawa,wysokosc){
    return 0.5* podstawa* wysokosc;
}

console.log(trojkat(3,2));


const trojkat2 =(podstawa,wysokosc) => 0.5* podstawa* wysokosc;

console.log(trojkat2(3,2));






function calculateSupply(age,amount){
    maxAge=100;
    
    console.log(`You will need ${amount*age} to last you until the ripe old age of ${maxAge-age}`)
}

calculateSupply(18,3);




function halfOf(r){
    return 3.14*r**2;
}
console.log(halfOf(5));


function czyParzyste(a){
    if(a%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(czyParzyste(5));
console.log(czyParzyste(4.34));
console.log(czyParzyste(2));



function greet(poraDnia,imie){
    console.log(`Good ${poraDnia}, ${imie}`);
}

greet(`afternoons`,`Milena`);