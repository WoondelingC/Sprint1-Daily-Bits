const opc = document.querySelectorAll('.opc');
const respuestas = document.querySelectorAll('.respuestas');
const boton1 = document.getElementById('botonC');
var acertada = document.querySelector('acertada');
var fallida = document.querySelector('.fallida');
let fallos = 0;

//barra de Progreso
let avance = ()=>
{
    document.querySelector('.avc').classList.toggle ('progreso');
    boton1.style.backgroundColor = 'green';
    boton1.textContent = 'Correcto';

}


function sinProgreso(){
    document.querySelector('.avc').classList.toggle ('sinProgreso');
    boton1.style.backgroundColor = 'red';
    boton1.textContent = 'Incorrecto';
    oportunidades();

}


    opc.forEach(function(item){

    item.addEventListener('click',(e)=>{

    if(e.target==opc[0]){
    respuestas[0].style.border = '2px solid green';
    boton1.style.backgroundColor = '#8a2be2';
    boton1.addEventListener ('click',function(){
        avance();
        siguiente(); 
        estadistica();
        acertadas ++;
       

    })

    }else if(e.target==opc[1]){
        respuestas[1].style.border = '2px solid red';
        boton1.style.backgroundColor = '#8a2be2'
        boton1.addEventListener ('click',function(){
            sinProgreso();
            siguiente();
            fallos ++;
            estadistica();
            
        })

    }else if(e.target==opc[2] || e.target==opc[3]){
        
            boton1.addEventListener ('click',function(){
            respuestas[2].style.border = '2px solid red';
            boton1.style.backgroundColor = '#8a2be2';
            sinProgreso();
            siguiente();
            fallos ++;

        })
        
    }
    })

})

function estadistica (){
    let acertadas = 0;
    localStorage.setItem('respuestasC',acertadas);
}
    
    

//pasar a la siguiente ventana

function siguiente (){
    if(document.querySelector('.pregunta1')){
        setTimeout(() => {
            location.href="../preguntas html/index4.html";
          }, 2000);

    }else if(document.querySelector('.pregunta2')){
        setTimeout(() => {
            location.href = "../preguntas html/index5.html";
          }, 2000);
        

    }else if(document.querySelector('.pregunta3')){
        setTimeout(() => {
            location.href = "../inicio/estadisticas.html";
          }, 2000);
        

    }else if(document.querySelector('.pregunta4')){
        setTimeout(() => {
            location.href = "../preguntas html/index7.html";
          }, 2000);
        
    }
}


//estado de las vidas guardo en localstorage y si la respuesta es incorrecta me resto vida
let vidas = document.querySelector('.vidas');

cont =  4 ;
if(localStorage.getItem('vidas')===null){  

localStorage.setItem('vidas', JSON.stringify(cont));
}

let vidas_Storage = JSON.parse(localStorage.getItem('vidas'));
console.log(JSON.parse(localStorage.getItem('vidas')))
    vidas.innerHTML = ``;
    vidas.innerHTML = `<p>${vidas_Storage}</p>`;


function oportunidades(){
    
    boton1.addEventListener('click', function (){
        if(localStorage.getItem('vidas'))
        {
            v = vidas_Storage = vidas_Storage - 1;

        
            localStorage.setItem('vidas', JSON.stringify(v));

            let vidas_Storage2 = JSON.parse(localStorage.getItem('vidas'));

            vidas.innerHTML = ``;
            vidas.innerHTML = `<p>${vidas_Storage2}</p>`;
            if(v<=0){
                localStorage.removeItem('vidas');
            }


        }
        
    })
};








    


