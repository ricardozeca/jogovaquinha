//código do ator

let xAtor = Math.floor(Math.random() * 370) + 30;
let yAtor = 366;
let colisao = false;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

//preciso pensar o que vou fazer aqui
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
      xAtor = Math.floor(Math.random() * 370) + 30;
      yAtor = 366;
    }
  }
}
