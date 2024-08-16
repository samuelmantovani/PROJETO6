let palavra;
let imagem;
let musica;

function preload(){
  imagem =
loadImage("imagem.png");
  musica = 
loadSound("musica.mp3");
}


function setup() {
  createCanvas(1000, 1000);
  palavra = cmsp();
  musica.loop();
}

function draw() {
 background("gray");
  image(imagem,50,200,600,400)
  escola();
  alura();
  cmsp();
}

function escola(){
  fill("white");
  textSize(70);
  textAlign(CENTER,CENTER);
}

 function alura(){
  let maximo=width;
  let minimo=0;
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  let inicio= palavra.substring(0, quantidade);
  text(inicio, 300,300);
}

function cmsp(){
  let palavras=["Vô nada", "JavaScript", "Messi > Cr7", "Samuel", "Amo Deus"];
return random(palavras);
}