//variáveis das imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;

//variáveis dos sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  //carregando imagens
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-2.png");
  imagemCarro = loadImage("imagens/pink-car.png");
  imagemCarro2 = loadImage("imagens/red-car.png");
  imagemCarro3 = loadImage("imagens/purple-car.png");
  imagemCarro4 = loadImage("imagens/white-car.png");
  imagemCarro5 = loadImage("imagens/salmao-car.png");
  imagemCarro6 = loadImage("imagens/yellow-car.png");
  imagensCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  
//carregando sons
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav")
  

}

