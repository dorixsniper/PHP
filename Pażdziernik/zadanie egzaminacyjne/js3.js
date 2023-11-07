const passwdE =document.getElementById('passwd')
const resultE = document.getElementById('result')
const btnE=document.getElementById('btn')

function isDigit(text){
    const reg= /[0-9]/
    return  reg.test(text);
}

btnE.addEventListener('click', (event)=>{
let passwd= passwdE.value
if(passwd.length===0 ){
    resultE.style.color='red'
    resultE.innerHTML = "WPISZ HASLO"
}
else if(passwd.length>=7 && isDigit(passwd)){
    resultE.style.color='green'
    resultE.innerHTML="Dobre"
}
else if(passwd.length>=4 && isDigit(passwd)){
    resultE.style.color='blue'
    resultE.innerHTML="Średnie"
}
else{
    resultE.style.color='yellow'
    resultE.innerHTML="Słabe" 
}
})