var on = false;
var col = 0;
var col2 = 255;

let song;

function preload () {
  song = loadSound ('data/drip.mp3');
}

function setup() {
  createCanvas (windowWidth,windowHeight); 
  song.loop();
}

function draw() {
  let volume = map(mouseX,0,width,0,1);
  volume = constrain(volume,0,1);
  song.amp(volume);
  
  let speed = map (mouseY,0,height,0,2);
  speed = constrain(speed,0.01,4);
  song.rate(speed);
  
  noStroke ();
  background (0);  
  
  for (var x = 0; x < width; x = x +1){
    col = map (mouseX, 0,width,0,255);
    col2 = map (mouseY,0,height,255,0);
    fill (col2,100,col);
    ellipse (x, random(height),2);
  }
    
  for (var x = 0; x < width; x = x +1){
      col = map (mouseX, 0,width,0,255);
      col2 = map (mouseY,0,height,255,0);
      fill (60,col,col2);
      ellipse (x, random(height),3);
  }
}
