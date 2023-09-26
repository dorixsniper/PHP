function bigToSmall(a)
{
    return a.toLowerCase();
}
console.log(bigToSmall(`DFGFDGFDGFFGDGDFG`));

function longerTest(a,b)
{
    if(a.length>b.length){
        return a;
    }
    else {
        return b;
    }
}

console.log(longerTest(`Blazej`,`sipiory` ));


function monkey(a){
 const n=a.indexOf("@")
 if(n>=0){
    console.log(`malpa znaleziona na pozycji ${n}`)
 }   
 else{
    console.log(`malpa nie znaleziona`)
 }
}
monkey(`rkmg r`);
monkey(`rkmg@`);



function firstFive(text){
    return text.substr(0,5)

}
console.log(firstFive("BłazejWojtasJestSpecjalntyNaSwojSposob"));


function lastFive(text){
    return  text.substring(text.length-5)

}

console.log(lastFive("BłazejWojtasJestSpecjalntyNaSwojSposob"));

function midFive(text){
    return text.slice(text.length/2)
}