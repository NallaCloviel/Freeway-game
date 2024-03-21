//variáveis
let yAtor = 366;
let xAtor = 85;
let comprAtor = 30;
let altAtor = 30;
let meusPontos = 0;

let colisao = false;

//código
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, comprAtor, altAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
        yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

//verificando se houve colisão
function verificaColisao(){
  for (let i = 0; i < imagensCarros.length; i = i+1){
    if (collideRectCircle(xCarros[i], yCarros[i], comprCarro, altCarro, xAtor, yAtor, 15)){
      colisao = true;
      volta();
      somDaColisao.play();
    if (pontosNegativos()){
      meusPontos -= 1;
    }
   }
  }
}

function volta(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  fill(color('white'));
  stroke(color("white"));
  textSize(25)
  text(meusPontos, width/4, 25)
}

function marcarPontos(){
  if (yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    volta();
  }
}

function pontosNegativos(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}