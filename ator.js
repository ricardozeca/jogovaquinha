//código do ator

let xAtor = Math.floor(Math.random() * 370)+30;
let yAtor = 366

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}
