//listas dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros= [40, 96, 152, 215, 261, 326];
let velocidadeCarros = [4, 6.5, 2.5, 3.2, 5.3, 4.7];

//tamanho carro
let comprCarro = 47;
let altCarro = 30;


//código
function mostraCarro(){
  for (let i = 0; i < imagensCarros.length; i = i+1){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprCarro, altCarro);
 }
}

function movimentaCarro(){
  for (let i = 0; i< imagensCarros.length; i = i+1){
     xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoInicial (){
  for (let i = 0; i< imagensCarros.length; i = i + 1){
    if (xCarros[i] < -50){
      xCarros[i] = 600;
  }
}
}