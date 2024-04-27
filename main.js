

function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();       
    }else{
        alert("Elemento não encontrado ou seletor invalido");
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
/*Obrigatório declarar a variavel contdor fora do while
let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    contador ++;

}
*/

//transformando o codigo um pouco mais funcional com o laço for

for (let contador = 0; contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }

    contador ++;

}



/*
queryselectorAll busca todos os elementos que utilizam a classe tecla em seus elementos substituindo a repeteição de códigos abaixo*
/

/*
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()
}

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play()
}

function tocaSomPuf(){
    document.querySelector('#som_tecla_puf').play()
}

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play()
}

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play()
}

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play()
}

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play()
}

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play()
}
*/
