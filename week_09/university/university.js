let Metana;
let cell;

function preload() {
   Metana = loadFont ('data/NeueMetana-Regular.otf');
}

function setup() {
  createCanvas (windowWidth,windowHeight);
  cell = new Cell('FREE INTERNATIONAL UNIVERSITY');
}

function draw() {
  background(0,150,100);
  cell.drawCells(60);
}

class Cell {
  constructor (type){
    this.type = type;
  }
  
  drawCells(size){
    var cells = Metana.textToPoints(this.type,100,height/2,size,{
      sampleFactor: .3,
    })
    
    for (var i = 0; i < cells.length; i++){
      var cell = cells[i];
      stroke (255);
      strokeWeight (3);
      point (cell.x+random(-1,1),cell.y+random(-1,1));  
    }    
  }
  
}
