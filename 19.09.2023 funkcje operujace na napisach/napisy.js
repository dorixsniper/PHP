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