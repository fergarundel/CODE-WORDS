var song;
var analyzer;

function preload(){
  song = loadSound ('data/skee.mp3'); // associates the sound to variable
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  analyzer = new p5.Amplitude(); 
  analyzer.setInput(song);
  background (0);
}

function draw() {
  var volume = analyzer.getLevel();
  translate (width/2,height/2);
  background (0,8);
  stroke (0,0,volume*1000);
  strokeWeight (volume*7);
  
 let x1 = cos (radians(frameCount)) * 500;
 let y1 = sin (radians(frameCount)) * 250;
 let x2 = sin (radians(frameCount)) * 500;
 let y2 = cos (radians(frameCount)) * 250;
 
 line (x1,y1,x2,y2);

}

function mousePressed(){
  if (song.isPlaying()) {
    song.stop();
    song.noLoop();
  } else {
    song.play();
    song.loop();
  }
  }
