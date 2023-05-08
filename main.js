function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio).play;
  
  //if (elemento === null) {
      //alert('Elemento não encontrado');
      //console.log('Elemento não encontrado');
  
  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  }
  else {
    console.log('elemento não encontrado ou seletor inválido');
    
  }
}
//}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//FUNCAO enquanto = WHILE
// while (contador < listaDeTeclas.length) {

  //const tecla = listaDeTeclas[contador];
  //const instrumento = tecla.classList[1];
  //template string
  //const idAudio = '#som_${instrumento}';

  //console.log(idAudio);

  //tecla.onclick = function () {
    //tocaSom(idAudio);
  //}

  //contador = contador + 1;

  //console.log(contador);
//}

// FUNCAO Para = FOR
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  //template string
  const idAudio = '#som_${instrumento}';
  //console.log(idAudio);
  const elemento = document.querySelector (seletorAudio);

  tecla.onclick = function () {
      tocaSom(idAudio);  
  }
}
  tecla.onkeydown = function (evento) {
    //dada condicao for verdadeira
    if (evento.code === 'Space' || evento.code ==='Enter') {
    tecla.classList.add('ativa');
  }

  tecla.onkeyup = function () {
    tecla.classList.remove ('ativa');
  }

}
