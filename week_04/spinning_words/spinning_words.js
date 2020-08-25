//fergus arundel

function preload () {
  NeueMetana = loadFont ('data/NeueMetana-Regular.otf'); 
}

var spin = 0;

function setup() {
  createCanvas (1280,700);
  background (255);
  fill (0,0,255);
  angleMode (DEGREES);
  textSize (32);
  textFont (NeueMetana);
  textAlign (CENTER);

}

function draw() {
   spin = spin + map(mouseX,0,1280,-10,10); // map uses mouses value to change direction of rotation
  background (255,30);
  translate (mouseX,mouseY);
  fill (0,0,255);
  rotate(spin);
  textSize (50);
  text ('hello world',0,0);
 
}
  
