//código do ator

let xAtor = Math.floor(Math.random() * 360) + 30;
let yAtor = 371;
let colisao = false;
let meusPontos = 0

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover())
      yAtor += 3;
  }
}


function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      30
    );
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  xAtor = Math.floor(Math.random() * 360) + 30;
  yAtor = 371;
}

function incluiPontos (){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0))
  text(meusPontos,width / 30, 27);
}

function marcaPonto (){
  if (yAtor < 15){
    meusPontos  += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function  podeSeMover (){
  return yAtor < 371;
}