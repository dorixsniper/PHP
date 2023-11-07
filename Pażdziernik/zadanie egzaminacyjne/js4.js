const lengthE=document.getElementById('length')
const widhtE=document.getElementById('width')
const resultE=document.getElementById('result')
const btnE=document.getElementById('btn')

btnE.addEventListener('click', (event)=>{
let width=Number(widhtE.value) 
let length=Number(lengthE.value) 
let area = 2*width*2.7 + 2*length*2.7
resultE.innerHTML=`Powierzchnia calkowita ścian ${area} <br>
Koszt malowania  ${area*8}`

})