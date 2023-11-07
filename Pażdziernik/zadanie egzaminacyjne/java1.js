const sideE=document.getElementById('side')
const btnArea=document.getElementById('btnArea')
const btnCirc=document.getElementById('btnCirc')
const resultE=document.getElementById('result')

btnArea.addEventListener('click', (event)=>{
let a=sideE.value;
if(a.length==0 || isNaN(a)){
    resultE.innerHTML='Nalezy wpisac wartosc liczbowa'
} 
else
{
    resultE.innerHTML=`P= ${a}`


}
}  )


btnCirc.addEventListener('click', (event)=>{
    
}  )



