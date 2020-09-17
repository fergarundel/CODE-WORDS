let song, fft, w;
 
function preload() {
  song = loadSound ('data/b2.mp3'); // associates the sound to variable
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  fft = new p5.FFT(0, 128); 
  fft.setInput(song);
  background (0);
  w = width / 128;
}

function draw() {
  var spectrum = fft.analyze();
  background (0);
  noStroke ();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 255, height, 0);
    fill (255, 0, 0);
    rect (i*w, y, w-2, height - y);
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    song.noLoop();
  } else {
    song.play();
    song.loop();
  }
}
