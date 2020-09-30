// CODE TAKEN AND EDITED FROM DANIEL SHIFFMAN (CODING TRAIN)

let font;
let vehicles = [];
let text = 'AN APPEAL FOR AN ALTERNATIVE';

function preload(){
  font = loadFont('data/NeueMetana-Regular.otf');
}

function setup() {
  createCanvas (windowWidth,windowHeight);  
  
    var cells = font.textToPoints(text,90,height/2,60,{ 
      sampleFactor: .3,
    });
  
  for (var i = 0;i < cells.length;i++){
    var cell = cells[i];
    var vehicle = new Vehicle(cell.x,cell.y);
    vehicles.push(vehicle);
  }

}


function draw() {
  background(0,150,100);
  
  for (var i =0; i <vehicles.length;i++){
    var vehicle = vehicles [i];
    vehicle.behaviours();
    vehicle.update();
    vehicle.show();
  }
}
