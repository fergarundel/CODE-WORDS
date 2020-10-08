// CODE TAKEN AND EDITED FROM DANIEL SHIFFMAN (CODING TRAIN)
// CODE ALSO USING ASPECTS FROM https://www.openprocessing.org/sketch/947078 

let on = false;

let font;
let vehicles = [];

let text = ['FREE', 'INTERNATIONAL', 'UNIVERSITY'];
let index = 0;

function preload(){
  font = loadFont('data/NeueMetana-Regular.otf');
}

function setup() {
  createCanvas (windowWidth,windowHeight);  
  
  for (var i = 0;i < 200;i++){
    var vehicle = new Vehicle(random(width),random(height));
    vehicles.push(vehicle);    
  } 
}

function draw() {
  background (0,100,150);
  
  if (on){
    loopingText(text[index]);
    animate(200);
  }

  for (var i =0; i < vehicles.length ;i++){
    var vehicle = vehicles [i];
    vehicle.behaviours();
    vehicle.update();
    vehicle.show(3);
  }
  }
  
 function mousePressed(){
    on = !on;
   if (on = true){
     on = true;
   } 
 }

function loopingText (phrase){
  let bounds = font.textBounds(phrase, 0, 0, width/10);
  let posx = width / 2 - bounds.w / 2;
  let posy = height / 2 + bounds.h / 2;

  let cells = font.textToPoints(phrase,posx,posy,width/10,{ 
     sampleFactor: 0.1
  });

  if (cells.length < vehicles.length){
    vehicles.splice(cells.length -1, vehicles.length - cells.length);
  
  for (let i = 0;i < cells.length; i++){
    vehicles[i].target.x = cells[i].x;
    vehicles[i].target.y = cells[i].y; 
    }
  } else if (cells.length > vehicles.length){
    
    for (let i = vehicles.length; i< cells.length;i++){
      let v = vehicles[i - vehicles.length].clone();
      vehicles.push(v);
    }
    
    for (let i=0; i<cells.length;i++){
      vehicles[i].target.x = cells[i].x;
      vehicles[i].target.y = cells[i].y;
    } 
  } else {
    for (let i = 0; i < cells.length; i++){
      vehicles[i].target.x = cells[i].x;
      vehicles[i].target.y = cells[i].y;
    }
  }
}

function animate (time){
  for (let i = 0; i < 50; i++){
    print (i);
    if (frameCount == time * i + time){
      index = index +1;
    }
    if (index > text.length - 1){
    index = 0;  
    }
  }
}
