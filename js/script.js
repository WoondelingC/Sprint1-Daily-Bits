const opc = document.querySelectorAll('.opc');
const respuestas = document.querySelectorAll('.respuestas');
const boton1 = document.getElementById('botonC');

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

console.log(opc);
    opc.forEach(function(item){

    item.addEventListener('click',(e)=>{

    if(e.target==opc[0]){
    respuestas[0].style.border = '2px solid green';
    boton1.style.backgroundColor = '#8a2be2';
    boton1.addEventListener ('click',function(){
        avance();
        siguiente(); 
        estadistica();
    
    })

    }else if(e.target==opc[1]){
        respuestas[1].style.border = '2px solid red';
        boton1.style.backgroundColor = '#8a2be2'
        boton1.addEventListener ('click',function(){
            sinProgreso();
            siguiente();
            estadisticaNegativa();
            
        })

    }else if(e.target==opc[2] || e.target==opc[3]){
        
            boton1.addEventListener ('click',function(){
            respuestas[2].style.border = '2px solid red';
            boton1.style.backgroundColor = '#8a2be2';
            sinProgreso();
            siguiente();
            estadisticaNegativa();

        })
        
    }
    })

})

/*se guarda en local storage las acertadas y se crea una funcion que me las sume*/ 

    let acertada = document.querySelector('.acertada');

    correct =  0 ;

    if(localStorage.getItem('acertada')===null){  
    
    localStorage.setItem('acertada', correct);
    }
    
    let acertada_Storage = JSON.parse(localStorage.getItem('acertada'));
    console.log(JSON.parse(localStorage.getItem('acertada')))
     
    window.onload = function() {

        what();

        function what() {
            document.querySelector('.acertada').innerHTML;
            acertada.innerHTML = `<span>${acertada_Storage}</span>`;
        };

    }
    
    
    
    function estadistica(){
        
         if(localStorage.getItem('acertada'))
         {
                c = acertada_Storage = acertada_Storage + 1;
    
            
                localStorage.setItem('acertada', JSON.stringify(c));
    
                let acertada_Storage2 = JSON.parse(localStorage.getItem('acertada'));
    
                acertada.innerHTML = ``;
                acertada.innerHTML = `<span>${acertada_Storage2}</span>`;
    
            }
        
    };
    console.log(acertada.innerHTML);

    //se guarda las respuestas fallidas y se crea funcion para sumar y mostrarlas en estadisticas

    let fallida = document.querySelector('.fallida');

    incorrect = 0;

    if(localStorage.getItem('fallida')===null){  
    
        localStorage.setItem('fallida', JSON.stringify(incorrect));
        }
        
        let fallida_Storage1 = JSON.parse(localStorage.getItem('fallida'));
        console.log(JSON.parse(localStorage.getItem('fallida')))
        
        
        window.onload = function() {

            faile();
    
            function faile() {
                fallida.innerHTML;
                fallida.innerHTML = `<span>${fallida_Storage1}</span>`;
            };
    
        }
        
        
        function estadisticaNegativa(){
            
                if(localStorage.getItem('fallida'))
                {
                    i = fallida_Storage1 = fallida_Storage1 + 1;
        
                
                    localStorage.setItem('fallida', JSON.stringify(i));
        
                    let fallida_Storage2 = JSON.parse(localStorage.getItem('fallida'));
        
                    fallida.innerHTML = ``;
                    fallida.innerHTML = `<span>${fallida_Storage2}</span>`;
        
                }
                
        };


    

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
    vidas.innerHTML;
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








    


