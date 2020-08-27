var Foucault = "In the mirror, I see myself there where I am not, in an unreal, virtual space that opens up behind the surface; I am over there, there where I am not, a sort of shadow that gives my own visibility to myself, that enables me to see myself there where I am absent: such is the utopia of the mirror.";
var xbounce = 1;
var ybounce =1;
var xmove = 3;
var ymove = 2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize (24);
  noStroke();
  //textAlign(LEFT);
  textFont("Helvetica");
}

function draw() {
  xbounce = xbounce + xmove;
  ybounce = ybounce + ymove;
  
  background (0);
  text(Foucault, xbounce, ybounce ,300,350);
  
  if (mouseX > xbounce && mouseX < xbounce +300 && mouseY > ybounce && mouseY < ybounce + 350){
    fill(255,0,0);
  }else {
    fill(255); 
  }
  
  if (xbounce + 300 > windowWidth || xbounce < 0){
    xmove = xmove * -1;
  }
  
  if (ybounce + 350 > windowHeight || ybounce < 0){
    ymove = ymove * -1;
  }

}
