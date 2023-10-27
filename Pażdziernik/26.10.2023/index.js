
const season1=document.querySelector('#season1')
const season2=document.querySelector('#season2')
const season3=document.querySelector('#season3')
const season4=document.querySelector('#season4')
const imgE=document.querySelector('img')

const btn = document.querySelector('button')

btn.addEventListener('Click', (event) => {
    if(season1.checked){
        imgE.src='wiosna.jpg'
    }
     if(season2.checked){
        imgE.src='lato.jpg'
     }
     if(season3.checked){
        imgE.src='jesien.jpg'
     }
     if(season4.checked){
        imgE.src='zima.jpg'
     }

    
})





