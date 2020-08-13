function preload () {
  NeueMetana = loadFont ('data/NeueMetana-Regular.otf');
  Inconsolata = loadFont ('data/Inconsolata-Regular.ttf');
 
}

function setup() {
  createCanvas (600,600);
  background (255);
  fill (0,0,255);
  textSize (32);
  textFont (NeueMetana);
  textAlign (CENTER);
  //textFont (font/32);

}

function draw() {
  textSize (10);
  textFont (NeueMetana);
  text ('small',100,100);
  textSize (20);
  textFont (NeueMetana);
  text ('medium',200,200);
  textSize (30);
  textFont (NeueMetana);
  text ('large',300,300);
  
 // textSize (50);
 // textFont (Inconsolata);
 // text ('Inconsolata',400,400);

}
  
